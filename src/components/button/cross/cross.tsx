import * as React from "react";
import { TouchableOpacity } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButton } from "src/types/button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * ButtonCross is a custom button component with a close icon.
 *
 * @component
 *
 * @param {IButton} props - The properties of the ButtonCross component.
 * @param {Function} [props.onPress] - The function to be called when the button is pressed.
 * @param {object} props.rest - Additional TouchableOpacity props to be applied to the underlying TouchableOpacity component.
 *
 * @returns {React.Element} A React element representing the ButtonBack component.
 *
 * @example
 * // Basic usage
 * return <ButtonCross onPress={() => navigation.goBack()} />
 */

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  button: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ButtonCross = ({ ...rest }: IButton) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();
  const theme = Theme.useTheme();

  return (
    <TouchableOpacity {...rest} style={styles.button} testID="button-cross">
      {/* Close icon */}
      <MaterialCommunityIcons
        name={"close"}
        size={18}
        color={theme.palette.primary.main}
        testID="close-icon"
      />
    </TouchableOpacity>
  );
};

export default ButtonCross;
