import React, { memo } from "react";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { View } from "react-native";

/**
 * RailSelected is a component as part of Range Silder.
 *
 * @returns {React.Element} A React element representing the Header component.
 *
 * @example
 * // Basic usage
 * return <RailSelected />
 */

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  root: {
    height: 2,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
}));

const RailSelected = () => {
  const styles = useStyles();

  return <View testID="container" style={styles.root} />;
};

export default memo(RailSelected);
