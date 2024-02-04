import * as React from "react";
import { Pressable } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButtonCircle } from "src/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * ButtonCircle is a custom button component with a close icon.
 *
 * @param {Function} [props.onButtonPress] - The function to be called when the button is pressed.
 * @param {string} [props.iconNamePressed] - The icon name for selected state.
 * @param {string} [props.iconNameNormal] - The icon name for non-selected state.
 * @param {string} [props.iconColor] - The icon color.
 * @param {boolean} [props.selected] - The selected flag to show selected and non-selected state.
 * @param {object} [props.rest] - Additional TouchableOpacity props to be applied to the underlying TouchableOpacity component.
 *
 * @returns {React.Element} A React element representing the ButtonBack component.
 *
 * @example
 * // Basic usage
 * return <ButtonCircle iconName="heart" onButtonPress={() => {}} />
 */

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  button: {
    width: theme.spacing(2.6),
    height: theme.spacing(2.6),
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.common.white,
    ...theme.shadow,
  },
}));

const ButtonCircle = ({
  iconNamePressed,
  iconNameNormal,
  iconColor,
  selected,
  onButtonPress,
  ...rest
}: IButtonCircle) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();

  return (
    <Pressable
      {...rest}
      style={styles.button}
      onPress={onButtonPress}
      testID="button-circle"
    >
      <MaterialCommunityIcons
        name={selected ? iconNamePressed : iconNameNormal}
        size={16}
        color={iconColor}
        testID="icon-circle"
      />
    </Pressable>
  );
};

export default ButtonCircle;
