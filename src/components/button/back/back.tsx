import * as React from "react";
import { TouchableOpacity } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButton } from "src/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * ButtonBack is a custom button component with a back arrow icon.
 *
 * @param {Function} [props.onButtonPress] - The function to be called when the button is pressed.
 * @param {object} [props.rest] - Additional TouchableOpacity props to be applied to the underlying TouchableOpacity component.
 *
 * @returns {React.Element} A React element representing the ButtonBack component.
 *
 * @example
 * // Basic usage
 * return <ButtonBack onButtonPress={() => navigation.goBack()} />
 */

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  button: {
    paddingRight: theme.spacing(2),
    paddingVertical: theme.spacing(0.5),
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ButtonBack = ({ onButtonPress, ...rest }: IButton) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();
  const theme = Theme.useTheme();

  return (
    <TouchableOpacity
      {...rest}
      style={styles.button}
      onPress={onButtonPress}
      testID="button-back"
    >
      {/* Back arrow icon */}
      <MaterialCommunityIcons
        name={"keyboard-backspace"}
        size={theme.spacing(2)}
        color={theme.palette.primary.main}
        testID="back-arrow-icon"
      />
    </TouchableOpacity>
  );
};

export default ButtonBack;
