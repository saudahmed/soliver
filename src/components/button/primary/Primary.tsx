import * as React from "react";
import { Pressable, Text } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButtonPrimary } from "src/types";

/**
 * ButtonPrimary is a custom button component with an icon and text.
 *
 * @param {Function} [props.onPress] - The function to be called when the button is pressed.
 * @param {string} [props.text] - Text to show on the button.
 * @param {boolean} [props.enabled] - enable or disable the button.
 *
 * @returns {React.Element} A React element representing the ButtonIcon component.
 *
 * @example
 * // Basic usage
 * return <ButtonPrimary text="lorum" enabled onButtonPress={() => {}} />
 */

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  buttonEnabled: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 12,
    backgroundColor: theme.palette.primary.main,
  },
  buttonDisabled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    flex: 1,
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    color: theme.palette.common.white,
    ...theme.typography.body2,
  },
}));

const ButtonSelect = ({ onButtonPress, text, enabled }: IButtonPrimary) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();

  return (
    <Pressable
      disabled={!enabled}
      onPress={onButtonPress}
      style={!enabled ? styles.buttonDisabled : styles.buttonEnabled}
      testID="button"
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonSelect;
