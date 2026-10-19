
import React from "react";
import {
  View,
  Text,
  Pressable,
  Linking,
  useWindowDimensions,
} from "react-native";

type HeroProps = {
  onViewWork?: () => void;
  onContactPress?: () => void;
};

export default function Hero({
  onViewWork,
  onContactPress,
}: HeroProps) {
  const { width } = useWindowDimensions();
  const isWide = width >= 768;

  const openSocial = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch {
      console.warn("Could not open social link:", url);
    }
  };

  return (
    <View className="overflow-hidden bg-[#0B0B0F] px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28">
      <View
        className={`w-full max-w-7xl self-center ${
          isWide
            ? "flex-row items-center justify-between"
            : "flex-col"
        }`}
      >
        {/* LEFT CONTENT */}
        <View
          className="z-10 w-full"
          style={{ flex: isWide ? 1 : undefined }}
        >
          {/* Availability */}
          <View className="mb-7 flex-row items-center">
            <View className="mr-3 h-2.5 w-2.5 rounded-full bg-[#A78BFA]" />
            <Text className="text-sm text-[#C4C4D0] md:text-base">
              Available for new opportunities
            </Text>
          </View>

          {/* Main heading */}
          <Text className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Hi, I'm
          </Text>

          <Text className="mt-1 text-6xl font-extrabold tracking-tight text-[#A78BFA] md:text-8xl">
            Hitesh.
          </Text>

          {/* Role */}
          <View className="mb-5 mt-5">
            <Text className="text-3xl font-bold text-white md:text-4xl">
              Web Developer
            </Text>
            <View className="mt-4 h-1 w-20 rounded-full bg-[#A78BFA]" />
          </View>

          {/* Introduction */}
          <Text className="max-w-xl text-base leading-7 text-[#A5A5B5] md:text-lg">
            I build modern, responsive and user-friendly applications
            with clean code and creative solutions. Turning ideas into
            seamless digital experiences.
          </Text>

          {/* CTA buttons */}
          <View className="mt-8 flex-row flex-wrap items-center gap-4">
            <Pressable
              onPress={onViewWork}
              accessibilityRole="button"
              accessibilityLabel="View my projects"
              className="flex-row items-center justify-center rounded-full bg-[#A78BFA] px-6 py-4 active:opacity-75"
            >
              <Text className="text-sm font-bold text-[#0B0B0F] md:text-base">
                View My Work
              </Text>
              <Text className="ml-3 text-lg text-[#0B0B0F]">→</Text>
            </Pressable>

            <Pressable
              onPress={onContactPress}
              accessibilityRole="button"
              accessibilityLabel="Contact me"
              className="flex-row items-center justify-center rounded-full border border-[#A78BFA] px-6 py-4 active:bg-[#211832]"
            >
              <Text className="text-sm font-semibold text-white md:text-base">
                Let's Talk
              </Text>
              <Text className="ml-3 text-lg text-[#A78BFA]">↗</Text>
            </Pressable>
          </View>

          {/* Highlights */}
          <View className="mt-12 flex-row flex-wrap gap-x-8 gap-y-5">
            <View>
              <Text className="text-2xl font-extrabold text-[#A78BFA]">
                Creative
              </Text>
              <Text className="mt-1 text-xs text-[#858596]">
                Problem Solving
              </Text>
            </View>

            <View>
              <Text className="text-2xl font-extrabold text-[#A78BFA]">
                Modern
              </Text>
              <Text className="mt-1 text-xs text-[#858596]">
                UI Development
              </Text>
            </View>

            <View>
              <Text className="text-2xl font-extrabold text-[#A78BFA]">
                Quality
              </Text>
              <Text className="mt-1 text-xs text-[#858596]">
                Clean Code
              </Text>
            </View>
          </View>
        </View>

        {/* RIGHT VISUAL */}
        <View
          className={`w-full items-center justify-center ${
            isWide ? "ml-8 mt-0" : "mt-20"
          }`}
          style={{ flex: isWide ? 0.9 : undefined }}
        >
          {/* Decorative glow */}
          <View className="absolute h-64 w-64 rounded-full bg-[#6D28D9] opacity-20 md:h-96 md:w-96" />

          {/* Developer illustration */}
          <View className="h-64 w-64 items-center justify-center rounded-full border border-[#39304F] bg-[#15151D] md:h-96 md:w-96">
            <View className="h-52 w-52 items-center justify-center rounded-full border border-[#A78BFA]/40 md:h-80 md:w-80">
              <Text className="text-7xl font-extrabold text-[#A78BFA] md:text-9xl">
                H.
              </Text>
              <Text className="mt-2 text-center text-xs font-semibold text-[#C4B5FD] md:text-base">
                CODE · DESIGN · BUILD
              </Text>
            </View>
          </View>

          {/* Floating code card */}
          <View className="absolute right-0 top-0 max-w-48 rounded-xl border border-[#39304F] bg-[#15151D] p-4">
            <Text className="mb-3 text-xs font-bold text-[#A78BFA]">
              DEVELOPER.TS
            </Text>
            <Text className="text-xs leading-5 text-[#C4C4D0]">
              const developer = {"{"}
              {"\n"}  name: "Hitesh",
              {"\n"}  role: "Developer",
              {"\n"}  passion: "Building"
              {"\n"}{"}"}
            </Text>
          </View>

          {/* Social links */}
          <View className="mt-8 flex-row flex-wrap justify-center gap-3">
            <Pressable
              onPress={() => openSocial("https://github.com/")}
              accessibilityRole="link"
              accessibilityLabel="Visit GitHub"
              className="rounded-full border border-[#39304F] px-4 py-3 active:bg-[#211832]"
            >
              <Text className="text-sm font-semibold text-white">
                GitHub ↗
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                openSocial("https://www.linkedin.com/")
              }
              accessibilityRole="link"
              accessibilityLabel="Visit LinkedIn"
              className="rounded-full border border-[#39304F] px-4 py-3 active:bg-[#211832]"
            >
              <Text className="text-sm font-semibold text-white">
                LinkedIn ↗
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
