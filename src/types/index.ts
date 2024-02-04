import { TouchableOpacityProps, ViewProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Edge, SafeAreaViewProps } from "react-native-safe-area-context";

export interface IHeaderTitleProps {
  headingText: string;
  subheadingText: string;
}

export interface IContainerProps extends ViewProps {
  paddingHorizontal?: number;
}

export interface ISafeAreaContainer extends SafeAreaViewProps {
  edges?: Array<Edge>;
}

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

export interface ITag {
  backgroundColor: string;
  textColor: string;
  text: string;
}
