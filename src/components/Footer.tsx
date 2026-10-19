
import React from "react";
import {
  View,
  Text,
  Pressable,
  Linking,
  useWindowDimensions,
} from "react-native";

type FooterProps = {
  onNavigate?: (section: string) => void;
  onBackToTop?: () => void;
};

const navigationLinks = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "My Work", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/",
  },
];

export default function Footer({
  onNavigate,
  onBackToTop,
}: FooterProps) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  const openLink = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch {
      console.warn("Unable to open link:", url);
    }
  };

  const navigateTo = (section: string) => {
    if (section === "home") {
      onBackToTop?.();
      return;
    }

    onNavigate?.(section);
  };

  return (
    <View className="bg-[#0B0B0F] px-6 pb-8 pt-10 md:px-10 md:pt-14">
      <View
        style={{
          width: "100%",
          maxWidth: 1200,
          alignSelf: "center",
        }}
      >
        {/* Top divider */}
        <View className="mb-10 h-px bg-[#292936]" />

        {/* Main footer */}
        <View
          style={{
            flexDirection: isDesktop ? "row" : "column",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          {/* Brand */}
          <View
            style={{
              flex: isDesktop ? 1.2 : undefined,
            }}
          >
            <Pressable
              onPress={onBackToTop}
              accessibilityRole="button"
              accessibilityLabel="Back to homepage"
              className="self-start"
            >
              <Text className="text-3xl font-extrabold text-white">
                Portfolio
                <Text className="text-[#A78BFA]">.</Text>
              </Text>
            </Pressable>

            <Text className="mt-4 max-w-sm text-sm leading-6 text-[#A5A5B5]">
              Creating modern digital experiences with creativity,
              clean code, and attention to detail.
            </Text>

            <View className="mt-5 h-1 w-12 rounded-full bg-[#A78BFA]" />
          </View>

          {/* Quick links */}
          <View
            style={{
              flex: isDesktop ? 1 : undefined,
            }}
          >
            <Text className="mb-5 text-xs font-bold tracking-[2px] text-[#A78BFA]">
              QUICK LINKS
            </Text>

            <View className="flex-row flex-wrap gap-x-6 gap-y-4">
              {navigationLinks.map((link) => (
                <Pressable
                  key={link.id}
                  onPress={() => navigateTo(link.id)}
                  accessibilityRole="button"
                  accessibilityLabel={`Navigate to ${link.label}`}
                  className="py-1 active:opacity-70"
                >
                  <Text className="text-sm text-[#C4C4D0]">
                    {link.label}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Social links */}
          <View
            style={{
              flex: isDesktop ? 0.8 : undefined,
            }}
          >
            <Text className="mb-5 text-xs font-bold tracking-[2px] text-[#A78BFA]">
              LET'S CONNECT
            </Text>

            <View className="flex-row flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Pressable
                  key={social.label}
                  onPress={() => openLink(social.url)}
                  accessibilityRole="link"
                  accessibilityLabel={`Visit ${social.label}`}
                  className="rounded-xl border border-[#39304F] px-4 py-3 active:bg-[#211832]"
                >
                  <Text className="text-sm font-semibold text-[#C4B5FD]">
                    {social.label} ↗
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>

        {/* Back to top */}
        <Pressable
          onPress={onBackToTop}
          accessibilityRole="button"
          accessibilityLabel="Scroll back to top"
          className="mt-10 self-start flex-row items-center rounded-full bg-[#A78BFA] px-5 py-3 active:opacity-80"
        >
          <Text className="text-sm font-bold text-[#0B0B0F]">
            Back to top
          </Text>
          <Text className="ml-3 text-base font-bold text-[#0B0B0F]">
            ↑
          </Text>
        </Pressable>

        {/* Bottom divider */}
        <View className="mb-6 mt-9 h-px bg-[#292936]" />

        {/* Copyright */}
        <View
          style={{
            flexDirection: width >= 640 ? "row" : "column",
            justifyContent: "space-between",
            alignItems: width >= 640 ? "center" : "flex-start",
            gap: 12,
          }}
        >
          <Text className="text-xs leading-5 text-[#858596]">
            © {new Date().getFullYear()} Hitesh. All rights reserved.
          </Text>

          <Text className="text-xs leading-5 text-[#777789]">
            Designed & built with care.
          </Text>
        </View>
      </View>
    </View>
  );
}
