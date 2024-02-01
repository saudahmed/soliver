import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

const BASE_SPACING = 8;
const BASE_SCREEN_HEIGHT = 570;

const getResponsiveFontSize = (value: number) => {
  return RFValue(value, BASE_SCREEN_HEIGHT);
};

const common = {
  spacing: (value: number) => {
    return getResponsiveFontSize(value * BASE_SPACING);
  },
  responsive: (value: number) => {
    return getResponsiveFontSize(value);
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 1,
        shadowColor: "rgba(0, 0, 0, 0.11)",
      },
      android: {
        elevation: 3,
      },
    }),
  },
  typography: {
    fontWeightMedium: "500",
    fontWeightBold: "700",
    headlineXL: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(22),
      lineHeight: getResponsiveFontSize(24),
    },
    headlineL: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(20),
      lineHeight: getResponsiveFontSize(22),
    },
    headlineM: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(18),
      lineHeight: getResponsiveFontSize(20),
    },
    headlineS: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(14),
      lineHeight: getResponsiveFontSize(16),
    },
    headlineXS: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(12),
      lineHeight: getResponsiveFontSize(14),
    },
    body1: {
      fontFamily: "Lato-Regular",
      fontSize: getResponsiveFontSize(16),
      lineHeight: getResponsiveFontSize(20),
    },
    body2: {
      fontFamily: "Lato-Regular",
      fontSize: getResponsiveFontSize(14),
      lineHeight: getResponsiveFontSize(16),
    },
    subtitle: {
      fontFamily: "Lato-Regular",
      fontSize: getResponsiveFontSize(12),
      lineHeight: getResponsiveFontSize(15),
    },
    button: {
      fontFamily: "Lato-Regular",
      fontSize: getResponsiveFontSize(18),
      lineHeight: getResponsiveFontSize(18),
    },
    caption: {
      fontFamily: "Lato-Regular",
      fontSize: getResponsiveFontSize(10),
      lineHeight: getResponsiveFontSize(12),
    },
    captionItalic: {
      fontFamily: "Lato-Italic",
      fontSize: getResponsiveFontSize(12),
      lineHeight: getResponsiveFontSize(16),
    },
    caption1Italic: {
      fontFamily: "Lato-Italic",
      fontSize: getResponsiveFontSize(14),
      lineHeight: getResponsiveFontSize(16),
    },
    caption2Italic: {
      fontFamily: "Lato-Italic",
      fontSize: getResponsiveFontSize(18),
      lineHeight: getResponsiveFontSize(21),
    },
  },
};

export default common;
