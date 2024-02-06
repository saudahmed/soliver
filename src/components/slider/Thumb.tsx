import React, { memo } from "react";
import { View } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 12;

/**
 * Thumb is a component as part of Range Silder.
 *
 * @param {object} props.name - value either low or high.
 * @returns {React.Element} A React element representing the Header component.
 *
 * @example
 * // Basic usage
 * return <Thumb name={"low"}/>
 */

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    backgroundColor: theme.palette.common.white,
    ...theme.shadow,
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    backgroundColor: theme.palette.common.white,
    ...theme.shadow,
  },
}));

const Thumb = ({ name }) => {
  const styles = useStyles();
  return (
    <View
      testID="container"
      style={name === "high" ? styles.rootHigh : styles.rootLow}
    />
  );
};

export default memo(Thumb);
