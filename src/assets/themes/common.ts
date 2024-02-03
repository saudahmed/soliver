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
      fontSize: getResponsiveFontSize(15),
    },
    headlineL: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(13),
    },
    headlineM: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(11),
      lineHeight: getResponsiveFontSize(16),
    },
    headlineS: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(10),
    },
    headlineXS: {
      fontFamily: "Lato-Bold",
      fontSize: getResponsiveFontSize(7),
    },
    body1: {
      fontFamily: "Lato-Regular",
      fontSize: getResponsiveFontSize(10),
    },
    body2: {
      fontFamily: "Lato-Regular",
      fontSize: getResponsiveFontSize(8),
    },
    caption1Italic: {
      fontFamily: "Lato-Italic",
      fontSize: getResponsiveFontSize(11),
    },
    caption2Italic: {
      fontFamily: "Lato-Italic",
      fontSize: getResponsiveFontSize(8),
    },
  },
};

export default common;
