import * as React from "react";
import { Pressable, View } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButtonColor } from "src/types/button";

/**
 * ButtonColor is a custom button component with a close icon.
 *
 * @param {Function} [props.onButtonPress] - The function to be called when the button is pressed.
 * @param {string} [props.color] - The color of the button.
 * @param {boolean} [props.selected] - The selected flag to show selected and non-selected state.
 * @param {object} [props.rest] - Additional TouchableOpacity props to be applied to the underlying TouchableOpacity component.
 *
 * @returns {React.Element} A React element representing the ButtonColor component.
 *
 * @example
 * // Basic usage
 * return <ButtonColor color="red" selected onButtonPress={() => {}} />
 */

export const useStyles = Theme.makeStyles((theme: ITheme) => {
  const buttonSize = 25;
  const innerCircleBorderWidth = 2.3;
  const innerCircleSize = buttonSize - innerCircleBorderWidth;

  return {
    button: {
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize * 0.5,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.palette.secondary.main,
      backgroundColor: theme.palette.common.white,
    },
    buttonSelected: {
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize * 0.5,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,
    },
    innerCircle: {
      width: innerCircleSize,
      height: innerCircleSize,
      borderRadius: innerCircleSize * 0.5,
      borderWidth: innerCircleBorderWidth,
      borderColor: theme.palette.common.white,
    },
  };
});

const ButtonColor = ({
  color,
  selected,
  onButtonPress,
  ...rest
}: IButtonColor) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();

  return (
    <Pressable
      {...rest}
      style={selected ? styles.buttonSelected : styles.button}
      onPress={onButtonPress}
      testID="button-color"
    >
      <View
        style={[styles.innerCircle, { backgroundColor: color }]}
        testID="inner-circle"
      />
    </Pressable>
  );
};

export default ButtonColor;
