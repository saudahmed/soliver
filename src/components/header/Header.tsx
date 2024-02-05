import { View, Text } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IHeaderTitleProps } from "src/types";

/**
 * Header is a component with HeadingText and SubheadingText.
 *
 * @param {string} [props.headingText] - The text passed as the heading text.
 * @param {string} [props.subheadingText] - The text passed as the subheading text.
 * @param {object} props.rest - Additional View props to be applied.
 *
 * @returns {React.Element} A React element representing the Header component.
 *
 * @example
 * // Basic usage
 * return <Header headingText="heading" subheadingText="subheading"} />
 */

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  header: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    ...theme.typography.headlineM,
    fontWeight: "normal",
    color: theme.palette.primary.main,
  },
  subheadingText: {
    ...theme.typography.body2,
    color: theme.palette.primary.main,
  },
}));

const Header = ({
  headingText,
  subHeadingText,
  ...rest
}: IHeaderTitleProps) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();

  return (
    <View {...rest} style={styles.header} testID="header">
      <Text style={styles.headingText}>{headingText}</Text>
      <Text style={styles.subheadingText}>{subHeadingText}</Text>
    </View>
  );
};

export default Header;
