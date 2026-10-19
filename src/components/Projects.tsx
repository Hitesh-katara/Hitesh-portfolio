
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Modal,
  StatusBar,
  useWindowDimensions,
} from "react-native";

const projects = [
  {
    number: "01",
    name: "Personal Portfolio",
    description:
      "A personal website showcasing my skills, projects, and web development journey.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: require("../../assets/projects/portfolio.png"),
  },
  {
    number: "02",
    name: "Responsive Website",
    description:
      "A responsive website designed to deliver a clean and consistent experience across different screen sizes.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
    image: require("../../assets/projects/website.png"),
  },
];

type Project = (typeof projects)[number];

export default function Projects() {
  const { width, height } = useWindowDimensions();
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const isDesktop = width >= 1024;
  const isTablet = width >= 640 && width < 1024;

  const horizontalPadding = width < 640 ? 24 : width < 1024 ? 36 : 48;
  const contentMaxWidth = 1200;
  const contentWidth = Math.min(
    width - horizontalPadding * 2,
    contentMaxWidth
  );

  const gridGap = 24;
  const cardWidth = isDesktop
    ? (contentWidth - gridGap) / 2
    : isTablet
      ? (contentWidth - gridGap) / 2
      : width - horizontalPadding * 2;

  const imageHeight = isDesktop ? 280 : isTablet ? 240 : 210;

  return (
    <View className="bg-[#0B0B0F] py-16 md:py-20">
      <View
        style={{
          width: contentWidth,
          alignSelf: "center",
        }}
      >
        {/* Section heading */}
        <View className="mb-10">
          <Text className="text-xs font-bold tracking-[3px] text-[#A78BFA]">
            03 — MY WORK
          </Text>

          <Text className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Featured{" "}
            <Text className="text-[#A78BFA]">Projects.</Text>
          </Text>

          <Text className="mt-4 max-w-2xl text-base leading-7 text-[#A5A5B5]">
            A selection of projects where I turn ideas into practical,
            responsive, and engaging digital experiences.
          </Text>

          <View className="mt-6 h-1 w-16 rounded-full bg-[#A78BFA]" />
        </View>

        {/* Mobile carousel */}
        {!isTablet && !isDesktop && (
          <>
            <ScrollView
              horizontal
              decelerationRate="fast"
              snapToInterval={cardWidth + 16}
              snapToAlignment="start"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingRight: 4,
                paddingBottom: 12,
              }}
            >
              {projects.map((project, index) => (
                <View
                  key={project.number}
                  style={{
                    width: cardWidth,
                    marginRight: index === projects.length - 1 ? 0 : 16,
                  }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    imageHeight={imageHeight}
                    onOpen={() => setSelectedImage(project)}
                  />
                </View>
              ))}
            </ScrollView>

            {projects.length > 1 && (
              <View className="mt-4 flex-row items-center justify-center">
                <Text className="text-xs tracking-[2px] text-[#777789]">
                  SWIPE TO EXPLORE
                </Text>
                <Text className="ml-3 text-base text-[#A78BFA]">
                  ← →
                </Text>
              </View>
            )}
          </>
        )}

        {/* Tablet and desktop grid */}
        {(isTablet || isDesktop) && (
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: gridGap,
            }}
          >
            {projects.map((project, index) => (
              <View
                key={project.number}
                style={{ width: cardWidth }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  imageHeight={imageHeight}
                  onOpen={() => setSelectedImage(project)}
                />
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Full-screen image preview */}
      <Modal
        visible={selectedImage !== null}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setSelectedImage(null)}
      >
        <StatusBar barStyle="light-content" />

        <View className="flex-1 items-center justify-center bg-[#0B0B0F]">
          {/* Project title */}
          {selectedImage && (
            <View
              style={{
                position: "absolute",
                top: 32,
                left: 24,
                right: 88,
                zIndex: 2,
              }}
            >
              <Text className="text-xs font-bold tracking-[2px] text-[#A78BFA]">
                PROJECT {selectedImage.number}
              </Text>

              <Text className="mt-2 text-lg font-bold text-white">
                {selectedImage.name}
              </Text>
            </View>
          )}

          {/* Close button */}
          <Pressable
            onPress={() => setSelectedImage(null)}
            accessibilityRole="button"
            accessibilityLabel="Close image preview"
            hitSlop={10}
            style={{
              position: "absolute",
              top: 28,
              right: 24,
              zIndex: 3,
              width: 48,
              height: 48,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 24,
              borderWidth: 1,
              borderColor: "#39304F",
              backgroundColor: "#15151D",
            }}
          >
            <Text className="text-3xl font-light text-white">×</Text>
          </Pressable>

          {/* Enlarged image */}
          {selectedImage && (
            <Image
              source={selectedImage.image}
              resizeMode="contain"
              style={{
                width,
                height: height * 0.72,
                marginTop: 30,
              }}
              accessibilityLabel={`${selectedImage.name} enlarged preview`}
            />
          )}

          <Text className="absolute bottom-8 px-6 text-center text-sm text-[#A5A5B5]">
            Tap × or press Back to close
          </Text>
        </View>
      </Modal>
    </View>
  );
}

type ProjectCardProps = {
  project: Project;
  index: number;
  imageHeight: number;
  onOpen: () => void;
};

function ProjectCard({
  project,
  index,
  imageHeight,
  onOpen,
}: ProjectCardProps) {
  return (
    <View className="overflow-hidden rounded-3xl border border-[#292936] bg-[#15151D]">
      {/* Project image */}
      <Pressable
        onPress={onOpen}
        accessibilityRole="button"
        accessibilityLabel={`Enlarge ${project.name} preview`}
        className="overflow-hidden bg-[#0B0B0F]"
      >
        <Image
          source={project.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: imageHeight,
          }}
        />

        <View className="absolute bottom-3 right-3 rounded-full border border-[#39304F] bg-[#0B0B0F] px-3 py-2">
          <Text className="text-xs font-semibold text-[#C4B5FD]">
            View preview ↗
          </Text>
        </View>
      </Pressable>

      {/* Project details */}
      <View className="p-5 md:p-7">
        <View className="flex-row items-center justify-between">
          <Text className="text-xs font-bold tracking-[2px] text-[#A78BFA]">
            PROJECT {project.number}
          </Text>

          <Text className="text-xs font-semibold text-[#777789]">
            {String(index + 1).padStart(2, "0")}
          </Text>
        </View>

        <Text className="mt-4 text-xl font-extrabold leading-7 text-white md:text-2xl">
          {project.name}
        </Text>

        <Text className="mt-3 text-sm leading-6 text-[#A5A5B5]">
          {project.description}
        </Text>

        {/* Technology tags */}
        <View className="mt-5 flex-row flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <View
              key={technology}
              className="rounded-full border border-[#39304F] bg-[#211832] px-3 py-2"
            >
              <Text className="text-xs font-medium text-[#C4B5FD]">
                {technology}
              </Text>
            </View>
          ))}
        </View>

        {/* Preview button */}
        <Pressable
          onPress={onOpen}
          accessibilityRole="button"
          className="mt-6 self-start flex-row items-center rounded-full border border-[#39304F] px-4 py-3 active:bg-[#211832]"
        >
          <Text className="font-semibold text-white">
            Explore project
          </Text>
          <Text className="ml-3 text-lg text-[#A78BFA]">↗</Text>
        </Pressable>
      </View>
    </View>
  );
}
