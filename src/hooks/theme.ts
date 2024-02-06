import { useColorScheme } from "react-native";
import { Light, Dark } from "src/assets/themes";

export const makeStyles = (fn: any) => {
  return () => {
    const isDarkMode = useColorScheme() === "dark";

    return fn(isDarkMode ? Dark : Light);
  };
};

export const useTheme = () => {
  const isDarkMode = useColorScheme() === "dark";

  return isDarkMode ? Dark : Light;
};
