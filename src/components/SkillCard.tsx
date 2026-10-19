
import { View, Text } from "react-native";

type SkillCardProps = {
  name: string;
  description: string;
  color: string;
  index: number;
};

export default function SkillCard({
  name,
  description,
  color,
  index,
}: SkillCardProps) {
  return (
    <View
      className={`mb-3 rounded-2xl p-5 ${color}`}
      style={{ borderRadius: 16 }}
    >
      <Text className="text-xs font-bold text-slate-500">
        SKILL {String(index + 1).padStart(2, "0")}
      </Text>

      <Text className="mt-2 text-xl font-extrabold text-brand-purple">
        {name}
      </Text>

      <Text className="mt-1 text-sm text-slate-600">
        {description}
      </Text>
    </View>
  );
}
