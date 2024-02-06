import * as React from "react";
import { View } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IDividerProps } from "src/types";

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  divider: {
    height: 0.5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const HorizontalDivider = ({ fullWidth, style }: IDividerProps) => {
  const styles = useStyles();

  return (
    <View
      style={[
        styles.divider,
        style,
        {
          width: fullWidth ? "100%" : "auto",
        },
      ]}
      testID="divider"
    />
  );
};

export default HorizontalDivider;
