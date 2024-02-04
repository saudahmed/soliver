import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IButtonIcon } from "src/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * ButtonIcon is a custom button component with an icon and text.
 *
 * @param {Function} [props.onPress] - The function to be called when the button is pressed.
 * @param {string} [props.iconPosition] - Position icon on left or right.
 * @param {string} [props.text] - Text to show on the button.
 * @param {string} [props.iconName] - The name of the icon.
 * @param {boolean} [props.border] - hide or display the border.
 *
 * @returns {React.Element} A React element representing the ButtonIcon component.
 *
 * @example
 * // Basic usage
 * return <ButtonIcon text="lorum" border iconPosition="left" iconName="icon-name" onButtonPress={() => {}} />
 */

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    flexDirection: "row",
  },
  buttonWithBorder: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
    borderRadius: 4,
  },
  buttonText: {
    color: theme.palette.primary.main,
    ...theme.typography.body1,
  },
  iconContainer: {
    paddingHorizontal: 4,
  },
}));

const ButtonIcon = ({
  onButtonPress,
  text,
  border,
  iconPosition,
  iconName,
}: IButtonIcon) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();
  const theme = Theme.useTheme();

  return (
    <Pressable
      onPress={onButtonPress}
      style={border ? styles.buttonWithBorder : styles.button}
      testID="button"
    >
      {iconPosition === "left" && (
        <View style={styles.iconContainer} testID="icon-left">
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={theme.palette.primary.main}
          />
        </View>
      )}
      <Text style={styles.buttonText}>{text}</Text>
      {iconPosition === "right" && (
        <View style={styles.iconContainer} testID="icon-right">
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            color={theme.palette.primary.main}
          />
        </View>
      )}
    </Pressable>
  );
};

export default ButtonIcon;
