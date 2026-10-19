
import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Contact from "../components/Contact"

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);

  const [sectionPositions, setSectionPositions] = useState<
    Record<string, number>
  >({});

  const registerSection = (section: string, y: number) => {
    setSectionPositions((previous) => ({
      ...previous,
      [section]: y,
    }));
  };

  const handleNavigate = (section: string) => {
    if (section === "home") {
      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
      return;
    }

    const position = sectionPositions[section];

    if (position !== undefined) {
      scrollRef.current?.scrollTo({
        y: position,
        animated: true,
      });
    }
  };

  return (
    <ScrollView
      ref={scrollRef}
      className="flex-1 bg-[#0B0B0F]"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-1 bg-[#0B0B0F]">
        <View onLayout={(event) =>
          registerSection("home", event.nativeEvent.layout.y)
        }>
          <Hero />
        </View>

        <View onLayout={(event) =>
          registerSection("about", event.nativeEvent.layout.y)
        }>
          <About />
        </View>

        <View onLayout={(event) =>
          registerSection("skills", event.nativeEvent.layout.y)
        }>
          <Skills />
        </View>

        <View onLayout={(event) =>
          registerSection("projects", event.nativeEvent.layout.y)
        }>
          <Projects />
        </View>

        <View onLayout={(event) =>
          registerSection("services", event.nativeEvent.layout.y)
        }>
          <Services />
        </View>

        <View onLayout={(event) =>
          registerSection("contact", event.nativeEvent.layout.y)
        }>
          <Contact />
        </View>

        <Footer
          onNavigate={handleNavigate}
          onBackToTop={() => handleNavigate("home")}
        />
      </View>
    </ScrollView>
  );
}
