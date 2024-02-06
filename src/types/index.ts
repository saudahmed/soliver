import { TouchableOpacityProps, ViewProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Edge, SafeAreaViewProps } from "react-native-safe-area-context";

export interface IHeaderTitleProps {
  headingText: string;
  subHeadingText: string;
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
  buttonSize?: number;
}

export interface IButtonSelect extends IButton {
  text: string;
  selected: boolean;
}

export interface IButtonPrimary extends IButton {
  text: string;
  enabled: boolean;
}

export interface ITag {
  backgroundColor: string;
  textColor: string;
  text: string;
}

export interface IArticleTags {
  new: boolean;
  sustainable: boolean;
  premium: boolean;
}

export interface IArticleColorInfo {
  variant: string;
  group: string;
  value: string;
}

export interface IArticlePicturesInfo {
  front: string;
  flat: string;
  back: string;
  outfit: string;
}

export interface IArticleColorVariant {
  wishList: boolean;
  shoppingCart: boolean;
  color: IArticleColorInfo;
  pictures: IArticlePicturesInfo;
}

export interface IArticle {
  id: number;
  name: string;
  detail: string;
  category: string;
  brand: string;
  price: number;
  tags: IArticleTags;
  colorVariants: Array<IArticleColorVariant>;
}

export interface ICategoryCardProps extends ViewProps {
  data: IArticle;
  cardSize: number;
  onLikeButtonPress: (id: number) => void;
  onOrderButtonPress: (id: number) => void;
}

export interface IFilterArticlesState {
  selectedColors: Array<boolean>;
  selectedBrands: Array<boolean>;
  minimumPrice: number;
  maximumPrice: number;
}

export interface IDividerProps extends ViewProps {
  fullWidth?: boolean;
  style?: any;
}
