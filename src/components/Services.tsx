
import React from "react";
import {
  View,
  Text,
  Pressable,
  Linking,
  Alert,
} from "react-native";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building modern, interactive websites with React and clean, reusable components.",
    icon: "</>",
    tags: ["React", "JavaScript", "UI Development"],
  },
  {
    number: "02",
    title: "Responsive Design",
    description:
      "Creating beautiful, user-friendly layouts for mobile, tablet, and desktop.",
    icon: "◫",
    tags: ["Mobile First", "Layouts", "Accessibility"],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Connecting frontend experiences with APIs and backend functionality.",
    icon: "{ }",
    tags: ["APIs", "Node.js", "Integration"],
  },
];

export default function Services() {
  const handleContact = async () => {
    const url =
      "mailto:hiteshkatara196@gmail.com?subject=Project%20Inquiry";

    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(
        "Unable to open email",
        "Please contact me at hiteshkatara196@gmail.com"
      );
    }
  };

  return (
    <View className="bg-[#0B0B0F] px-6 md:px-12 py-20">
      <View className="w-full max-w-7xl self-center">
        {/* Section heading */}
        <Text className="text-xs font-bold tracking-[3px] text-[#A78BFA]">
          04 — WHAT I DO
        </Text>

        <Text className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Services I <Text className="text-[#A78BFA]">Offer.</Text>
        </Text>

        <Text className="mt-5 max-w-2xl text-base leading-7 text-[#A5A5B5]">
          I turn ideas into functional, engaging digital
          experiences with thoughtful design and modern
          technology.
        </Text>

        {/* Service cards */}
        <View className="mt-10 flex-row flex-wrap gap-5">
          {services.map((service) => (
            <View
              key={service.number}
              className="w-full md:flex-1 md:min-w-[250px] rounded-2xl border border-[#292936] bg-[#15151D] p-6"
            >
              {/* Number and icon */}
              <View className="mb-7 flex-row items-center justify-between">
                <View className="h-14 w-14 items-center justify-center rounded-2xl border border-[#39304F] bg-[#211832]">
                  <Text className="text-xl font-extrabold text-[#A78BFA]">
                    {service.icon}
                  </Text>
                </View>

                <Text className="text-sm font-bold tracking-widest text-[#777789]">
                  {service.number}
                </Text>
              </View>

              {/* Title */}
              <Text className="text-xl font-bold leading-7 text-white">
                {service.title}
              </Text>

              {/* Description */}
              <Text className="mt-3 text-sm leading-6 text-[#A5A5B5]">
                {service.description}
              </Text>

              {/* Technology tags */}
              <View className="mt-6 flex-row flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <View
                    key={tag}
                    className="rounded-full border border-[#39304F] px-3 py-2"
                  >
                    <Text className="text-xs font-medium text-[#C4B5FD]">
                      {tag}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Bottom accent */}
              <View className="mt-7 h-1 w-12 rounded-full bg-[#A78BFA]" />
            </View>
          ))}
        </View>

        {/* Call to action */}
        <View className="mt-8 overflow-hidden rounded-2xl border border-[#39304F] bg-[#15151D] p-6 md:p-9">
          <Text className="text-xs font-bold tracking-[3px] text-[#A78BFA]">
            HAVE AN IDEA?
          </Text>

          <Text className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-white">
            Let's build something
            {"\n"}
            <Text className="text-[#A78BFA]">meaningful.</Text>
          </Text>

          <Text className="mt-4 max-w-xl text-base leading-7 text-[#A5A5B5]">
            Have a project in mind? Let's discuss your ideas
            and explore how we can bring them to life.
          </Text>
        </View>
      </View>
    </View>
  );
}
