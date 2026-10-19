
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Linking,
  Alert,
  Platform,
} from "react-native";
import { useWindowDimensions } from "react-native";

const CONTACT_EMAIL = "your-email@example.com";

const socialLinks = [
  { label: "GitHub", url: "https://github.com/" },
  { label: "LinkedIn", url: "https://www.linkedin.com/" },
  { label: "Instagram", url: "https://www.instagram.com/" },
];

export default function Contact() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openUrl = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(
        "Unable to open link",
        "Please check that the required app or browser is available."
      );
    }
  };

  const openEmail = () => {
    openUrl(`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Project Inquiry"
    )}`);
  };

  const sendMessage = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert("Missing details", "Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name.trim()}`
    );

    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );

    await openUrl(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    );
  };

  return (
    <View className="bg-[#0B0B0F] px-6 py-16 md:px-10 md:py-20">
      <View
        style={{
          width: "100%",
          maxWidth: 1200,
          alignSelf: "center",
        }}
      >
        {/* Section heading */}
        <View className="mb-10">
          <Text className="text-xs font-bold tracking-[3px] text-[#A78BFA]">
            GET IN TOUCH
          </Text>

          <Text className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Let's Talk
            <Text className="text-[#A78BFA]">.</Text>
          </Text>

          <Text className="mt-4 max-w-2xl text-base leading-7 text-[#A5A5B5]">
            Have a project in mind, need a developer, or just want to
            connect? I'd love to hear from you. Let's create something
            great together.
          </Text>

          <View className="mt-6 h-1 w-16 rounded-full bg-[#A78BFA]" />
        </View>

        {/* Responsive content */}
        <View
          style={{
            flexDirection: isDesktop ? "row" : "column",
            alignItems: "stretch",
            gap: 24,
          }}
        >
          {/* Left column */}
          <View
            style={{
              width: isDesktop ? "38%" : "100%",
            }}
          >
            {/* Email card */}
            <View className="rounded-2xl border border-[#292936] bg-[#15151D] p-6 md:p-7">
              <View className="mb-5 h-12 w-12 items-center justify-center rounded-xl border border-[#39304F] bg-[#211832]">
                <Text className="text-xl font-bold text-[#A78BFA]">
                  @
                </Text>
              </View>

              <Text className="text-xl font-bold text-white">
                Email Me
              </Text>

              <Text className="mt-3 text-sm leading-6 text-[#A5A5B5]">
                Reach out directly for projects, collaborations, or
                opportunities.
              </Text>

              <Text className="mt-5 text-sm font-medium text-[#C4B5FD]">
                {CONTACT_EMAIL}
              </Text>

              <Pressable
                onPress={openEmail}
                accessibilityRole="button"
                className="mt-6 self-start flex-row items-center rounded-xl bg-[#A78BFA] px-5 py-3 active:opacity-80"
              >
                <Text className="font-bold text-[#0B0B0F]">
                  Send an Email
                </Text>
                <Text className="ml-3 font-bold text-[#0B0B0F]">
                  ↗
                </Text>
              </Pressable>
            </View>

            {/* Social links */}
            <View className="mt-6 rounded-2xl border border-[#292936] bg-[#15151D] p-6 md:p-7">
              <Text className="text-xs font-bold tracking-[2px] text-[#A78BFA]">
                FIND ME ONLINE
              </Text>

              <Text className="mt-3 text-lg font-bold text-white">
                Let's connect.
              </Text>

              <Text className="mt-2 text-sm leading-6 text-[#A5A5B5]">
                Follow my work and connect with me online.
              </Text>

              <View className="mt-5 flex-row flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Pressable
                    key={social.label}
                    onPress={() => openUrl(social.url)}
                    accessibilityRole="link"
                    accessibilityLabel={`Visit ${social.label}`}
                    className="rounded-xl border border-[#39304F] px-4 py-3 active:bg-[#211832]"
                  >
                    <Text className="font-semibold text-[#C4B5FD]">
                      {social.label} ↗
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </View>

          {/* Right column: Contact form */}
          <View
            style={{
              flex: isDesktop ? 1 : undefined,
            }}
            className="rounded-2xl border border-[#292936] bg-[#15151D] p-6 md:p-8"
          >
            <Text className="text-2xl font-extrabold text-white md:text-3xl">
              Send a Message
            </Text>

            <Text className="mt-3 mb-7 text-sm leading-6 text-[#A5A5B5]">
              Tell me a little about yourself and what you'd like to build.
            </Text>

            {/* Name */}
            <Text className="mb-2 text-sm font-semibold text-[#D4D4E0]">
              Your Name
            </Text>

            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor="#777789"
              autoCapitalize="words"
              autoComplete="name"
              returnKeyType="next"
              className="mb-5 rounded-xl border border-[#39304F] bg-[#0B0B0F] px-4 py-4 text-white"
              accessibilityLabel="Your name"
            />

            {/* Email */}
            <Text className="mb-2 text-sm font-semibold text-[#D4D4E0]">
              Email Address
            </Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              placeholderTextColor="#777789"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              returnKeyType="next"
              className="mb-5 rounded-xl border border-[#39304F] bg-[#0B0B0F] px-4 py-4 text-white"
              accessibilityLabel="Email address"
            />

            {/* Message */}
            <Text className="mb-2 text-sm font-semibold text-[#D4D4E0]">
              Your Message
            </Text>

            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Tell me about your project..."
              placeholderTextColor="#777789"
              multiline
              textAlignVertical="top"
              style={{
                minHeight: 140,
                ...(Platform.OS === "web"
                  ? ({ outlineStyle: "none" } as object)
                  : {}),
              }}
              className="mb-6 rounded-xl border border-[#39304F] bg-[#0B0B0F] px-4 py-4 text-white"
              accessibilityLabel="Your message"
            />

            {/* Submit */}
            <Pressable
              onPress={sendMessage}
              accessibilityRole="button"
              className="flex-row items-center justify-center rounded-xl bg-[#A78BFA] px-5 py-4 active:opacity-80"
            >
              <Text className="text-base font-bold text-[#0B0B0F]">
                Prepare Message
              </Text>
              <Text className="ml-3 text-base font-bold text-[#0B0B0F]">
                ↗
              </Text>
            </Pressable>

            <Text className="mt-4 text-xs leading-5 text-[#777789]">
              Your email app will open with your message prepared. Review
              it and press Send in your email app to deliver it.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}