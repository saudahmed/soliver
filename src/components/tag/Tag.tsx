import { View, Text } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { ITag } from "src/types";

/**
 * Tag is a component with HeadingText and SubheadingText.
 *
 * @param {string} [props.backgroundColor] - The background color of the tag.
 * @param {string} [props.textColor] - The text color for text.
 * @param {string} [props.text] - The text represensting information.
 *
 * @returns {React.Element} A React element representing the Tag component.
 *
 * @example
 * // Basic usage
 * return <Tag backgroundColor="green" textColor="white" text="NEW"} />
 */

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  container: {
    alignSelf: "flex-start",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0.2),
  },
  text: {
    ...theme.typography.body3,
    textTransform: "uppercase",
  },
}));

const Tag = ({ backgroundColor, textColor, text }: ITag) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();

  return (
    <View style={[styles.container, { backgroundColor }]} testID="tag">
      <Text style={[styles.text, { color: textColor }]} testID="tag-text">
        {text}
      </Text>
    </View>
  );
};

export default Tag;
