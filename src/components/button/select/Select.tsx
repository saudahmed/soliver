import * as React from "react";
import { Pressable, Text } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButtonSelect } from "src/types";

/**
 * ButtonSelect is a custom button component with an icon and text.
 *
 * @param {Function} [props.onPress] - The function to be called when the button is pressed.
 * @param {string} [props.text] - Text to show on the button.
 * @param {boolean} [props.selected] - Switch between selected and unselected state.
 *
 * @returns {React.Element} A React element representing the ButtonIcon component.
 *
 * @example
 * // Basic usage
 * return <ButtonIcon text="lorum" border iconPosition="left" iconName="icon-name" onButtonPress={() => {}} />
 */

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  buttonSelected: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
  },
  buttonText: {
    color: theme.palette.primary.main,
    ...theme.typography.body2,
  },
  buttonTextSelected: {
    color: theme.palette.common.white,
    ...theme.typography.body2,
  },
}));

const ButtonSelect = ({ onButtonPress, text, selected }: IButtonSelect) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();

  return (
    <Pressable
      onPress={onButtonPress}
      style={selected ? styles.buttonSelected : styles.button}
      testID="button"
    >
      <Text style={selected ? styles.buttonTextSelected : styles.buttonText}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonSelect;
