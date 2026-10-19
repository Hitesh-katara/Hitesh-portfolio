
import React from "react";
import { View, Text } from "react-native";

const highlights = [
  {
    number: "01",
    title: "Web Development",
    description: "Building responsive, user-friendly websites.",
  },
  {
    number: "02",
    title: "Clean Code",
    description: "Writing maintainable and organized code.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description: "Improving my skills with every project.",
  },
];

export default function About() {
  return (
    <View className="bg-[#0B0B0F] px-6 md:px-12 py-20">
      <View className="w-full max-w-7xl self-center">
        {/* Section label */}
        <Text className="text-xs font-bold tracking-[3px] text-[#A78BFA]">
          ABOUT ME
        </Text>

        {/* Main heading */}
        <Text className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
          A little about{" "}
          <Text className="text-[#A78BFA]">me.</Text>
        </Text>

        {/* Responsive content */}
        <View className="mt-10 gap-10 md:flex-row md:items-start">
          {/* Introduction */}
          <View className="flex-1">
            <Text className="text-xl md:text-2xl font-bold text-white leading-9">
              Turning ideas into meaningful digital experiences.
            </Text>

            <Text className="mt-5 text-base leading-7 text-[#A5A5B5]">
              I'm a web developer who enjoys creating
              beautiful, responsive, and user-friendly
              websites.
            </Text>

            <Text className="mt-4 text-base leading-7 text-[#A5A5B5]">
              I work with HTML, CSS, and JavaScript to turn
              ideas into digital experiences. I'm always
              looking for ways to improve my skills, explore
              better approaches, and write cleaner code.
            </Text>

            {/* Small decorative accent */}
            <View className="mt-7 h-1 w-16 rounded-full bg-[#A78BFA]" />
          </View>

          {/* Highlight cards */}
          <View className="flex-1 gap-4">
            {highlights.map((item) => (
              <View
                key={item.number}
                className="flex-row items-start rounded-2xl border border-[#292936] bg-[#15151D] p-5"
              >
                <View className="mr-4 h-11 w-11 items-center justify-center rounded-xl border border-[#39304F] bg-[#211832]">
                  <Text className="text-sm font-bold text-[#A78BFA]">
                    {item.number}
                  </Text>
                </View>

                <View className="flex-1">
                  <Text className="text-lg font-bold text-white">
                    {item.title}
                  </Text>

                  <Text className="mt-2 text-sm leading-6 text-[#A5A5B5]">
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
