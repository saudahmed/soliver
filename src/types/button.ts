import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface IButton extends TouchableOpacityProps {
  onButtonPress: () => void;
}

export interface IButtonLeftIcon extends IButton {
  iconPosition: "left" | "right";
  text: string;
  border: boolean;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}
