import ThemeLight from "./light";
import ThemeDark from "./dark";

export interface IPaletteColor {
  light: string;
  main: string;
  dark: string;
  extraLight: string;
}

export interface IPaletteCommonColor {
  white: string;
  black: string;
  grey: string;
}

export interface IPalette {
  primary: IPaletteColor;
  secondary: IPaletteColor;
  positive: IPaletteColor;
  negative: IPaletteColor;
  common: IPaletteCommonColor;
  systemError: IPaletteColor;
  error: IPaletteColor;
  background: IPaletteColor;
}

export interface ITypographyStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight?: string;
  lineHeight?: number;
}

export type TypographyVariant =
  | "headlineXL"
  | "headlineL"
  | "headlineM"
  | "headlineS"
  | "headlineXS"
  | "body1"
  | "body2"
  | "caption1Italic"
  | "caption2Italic";

export interface ITypography
  extends Record<TypographyVariant, ITypographyStyle> {
  fontWeightMedium: string;
  fontWeightLight: string;
  fontWeightSemiBold: string;
  fontWeightBold: string;
}

export type ShadowOffsetKey = "shadowOffset";
export interface ShadowOffsetValue {
  width: number;
  height: number;
}

export interface IShadow extends Record<ShadowOffsetKey, ShadowOffsetValue> {
  shadowColor: string;
  shadowRadius: number;
  shadowOpacity: number;
  elevation: number;
}

export interface ITheme {
  palette: IPalette;
  typography: ITypography;
  shadow: IShadow;
  spacing: (value: number) => number;
  responsive: (value: number) => number;
}

export { ThemeLight as Light, ThemeDark as Dark };
