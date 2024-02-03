import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface IButton extends TouchableOpacityProps {
  onButtonPress: () => void;
}

export interface IButtonIcon extends IButton {
  iconPosition: "left" | "right";
  text: string;
  border: boolean;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
}

export interface IButtonCircle extends IButton {
  iconNameNormal: keyof typeof MaterialCommunityIcons.glyphMap;
  iconNamePressed: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor: string;
  selected: boolean;
}

export interface IButtonColor extends IButton {
  color: string;
  selected: boolean;
}
