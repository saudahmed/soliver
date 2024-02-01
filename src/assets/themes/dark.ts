import common from "./common";

const dark = {
  ...common,
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
      grey: "#9e9e9e",
    },
    primary: {
      main: "#000000",
      dark: "#000000",
      light: "#000000",
      extraLight: "#000000",
    },
    secondary: {
      main: "#bdbdbd",
      dark: "#616161",
      light: "#eeeeee",
      extraLight: "#f5f5f5",
    },
    positive: {
      main: "#66bb6a",
      dark: "#388e3c",
      light: "#a5d6a7",
      extraLight: "#c8e6c9",
    },
    negative: {
      main: "#ef5350",
      dark: "#d50000",
      light: "#ef9a9a",
      extraLight: "#ffcdd2",
    },
    systemError: {
      main: "#ea6a6a",
    },
    error: {
      main: "#d13c9b",
    },
    background: {
      main: "#ffffff",
      dark: "#ffffff",
      light: "#ffffff",
      extraLight: "#ffffff",
    },
  },
};

export default dark;
