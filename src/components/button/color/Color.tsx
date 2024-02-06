import * as React from "react";
import { Pressable, View } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButtonColor } from "src/types";

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
  return {
    button: {
      borderColor: theme.palette.secondary.main,
      backgroundColor: theme.palette.common.white,
    },
    buttonSelected: {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,
    },
    innerCircle: {
      borderColor: theme.palette.common.white,
    },
  };
});

const ButtonColor = ({
  color,
  selected,
  buttonSize = 25,
  onButtonPress,
  ...rest
}: IButtonColor) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();

  const innerCircleBorderWidth = buttonSize * 0.08;
  const innerCircleSize = buttonSize - innerCircleBorderWidth;

  const buttonSizeStyle = {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize * 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  };

  return (
    <Pressable
      {...rest}
      style={
        selected
          ? [styles.buttonSelected, buttonSizeStyle]
          : [styles.button, buttonSizeStyle]
      }
      onPress={onButtonPress}
      testID="button-color"
    >
      <View
        style={[
          styles.innerCircle,
          {
            backgroundColor: color,
            width: innerCircleSize,
            height: innerCircleSize,
            borderRadius: innerCircleSize * 0.5,
            borderWidth: innerCircleBorderWidth,
          },
        ]}
        testID="inner-circle"
      />
    </Pressable>
  );
};

export default ButtonColor;
