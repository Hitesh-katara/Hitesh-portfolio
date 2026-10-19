
import React from "react";
import { View, Text } from "react-native";

const skillGroups = [
  {
    number: "01",
    category: "WEB FUNDAMENTALS",
    skills: [
      { name: "HTML", description: "Semantic web structure" },
      { name: "CSS", description: "Responsive styling" },
      { name: "JavaScript", description: "Interactive experiences" },
    ],
  },
  {
    number: "02",
    category: "DEVELOPMENT",
    skills: [
      { name: "React", description: "Component-based UI" },
      { name: "React Native", description: "Cross-platform apps" },
      { name: "Expo", description: "Mobile app development" },
    ],
  },
  {
    number: "03",
    category: "TOOLS & WORKFLOW",
    skills: [
      { name: "Tailwind CSS", description: "Utility-first styling" },
      { name: "Git & GitHub", description: "Version control" },
      { name: "Node.js", description: "JavaScript runtime" },
    ],
  },
];

export default function Skills() {
  return (
    <View className="bg-[#0B0B0F] px-6 md:px-12 py-20">
      <View className="w-full max-w-7xl self-center">
        {/* Section heading */}
        <Text className="text-xs font-bold tracking-[3px] text-[#A78BFA]">
          02 — MY TOOLKIT
        </Text>

        <Text className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Skills & <Text className="text-[#A78BFA]">Expertise.</Text>
        </Text>

        <Text className="mt-5 max-w-2xl text-base leading-7 text-[#A5A5B5]">
          The technologies and tools I use to turn ideas into
          functional, responsive digital experiences.
        </Text>

        {/* Skill groups */}
        <View className="mt-10 flex-row flex-wrap gap-5">
          {skillGroups.map((group) => (
            <View
              key={group.number}
              className="w-full md:flex-1 md:min-w-[250px] rounded-2xl border border-[#292936] bg-[#15151D] p-5"
            >
              {/* Group heading */}
              <View className="flex-row items-center justify-between mb-6">
                <Text className="text-xs font-bold tracking-[2px] text-[#A78BFA]">
                  {group.category}
                </Text>

                <Text className="text-sm font-bold text-[#777789]">
                  {group.number}
                </Text>
              </View>

              {/* Skills */}
              <View className="gap-3">
                {group.skills.map((skill) => (
                  <View
                    key={skill.name}
                    className="rounded-xl border border-[#292936] bg-[#0B0B0F] p-4"
                  >
                    <View className="flex-row items-center">
                      <View className="mr-3 h-2 w-2 rounded-full bg-[#A78BFA]" />

                      <Text className="flex-1 text-base font-bold text-white">
                        {skill.name}
                      </Text>
                    </View>

                    <Text className="mt-2 ml-5 text-sm leading-5 text-[#A5A5B5]">
                      {skill.description}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Closing note */}
        <View className="mt-8 flex-row items-start rounded-xl border border-[#292936] bg-[#15151D] p-5">
          <Text className="mr-3 text-xl text-[#A78BFA]">
            ✳
          </Text>

          <View className="flex-1">
            <Text className="text-base font-bold text-white">
              Always learning.
            </Text>

            <Text className="mt-2 text-sm leading-6 text-[#A5A5B5]">
              I'm continuously improving my skills and exploring
              better ways to build clean, useful digital products.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
