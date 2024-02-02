import * as React from "react";
import { TouchableOpacity } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButton } from "src/types/button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * ButtonBack is a custom button component with a back arrow icon.
 *
 * @component
 *
 * @param {IButton} props - The properties of the ButtonBack component.
 * @param {Function} [props.onPress] - The function to be called when the button is pressed.
 * @param {React.ReactNode} [props.children] - Additional content to be rendered inside the button.
 * @param {object} props.rest - Additional TouchableOpacity props to be applied to the underlying TouchableOpacity component.
 *
 * @returns {React.Element} A React element representing the ButtonBack component.
 *
 * @example
 * // Basic usage
 * return <ButtonBack onPress={() => navigation.goBack()} />
 */

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  button: {
    paddingRight: theme.spacing(2),
    paddingVertical: theme.spacing(0.8),
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ButtonBack = ({ ...rest }: IButton) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();
  const theme = Theme.useTheme();

  return (
    <TouchableOpacity {...rest} style={styles.button} testID="button-back">
      {/* Back arrow icon */}
      <MaterialCommunityIcons
        name={"keyboard-backspace"}
        size={18}
        color={theme.palette.primary.main}
        testID="back-arrow-icon"
      />
    </TouchableOpacity>
  );
};

export default ButtonBack;
