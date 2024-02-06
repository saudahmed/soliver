import React, { memo } from "react";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { View } from "react-native";

/**
 * Rail is a component as part of Range Silder.
 *
 * @returns {React.Element} A React element representing the Header component.
 *
 * @example
 * // Basic usage
 * return <Rail />
 */

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  root: {
    flex: 1,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 2,
  },
}));

const Rail = () => {
  const styles = useStyles();

  return <View testID="container" style={styles.root} />;
};

export default memo(Rail);
