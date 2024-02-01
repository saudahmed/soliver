import * as React from "react";
import { PropsWithChildren } from "react";
import { StatusBar, useColorScheme } from "react-native";
import {
  SafeAreaView,
  Edge,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

/**
 * S-Oliver container. Provide top and bottom safe insets. Plus adopt background and status bar color according to light and dark theme
 * @component
 *
 * @example
 * return <SafeAreaContainer><MyAwesomeComponent /></SafeAreaContainer>
 */

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  background: {
    backgroundColor: theme.palette.background.main,
    flex: 1,
    paddingTop: theme.spacing(2),
  },
}));

export interface ISafeAreaContainer extends SafeAreaViewProps {
  edges?: Array<Edge>;
}

const SafeAreaContainer = ({
  children,
  edges = [],
  ...rest
}: PropsWithChildren<ISafeAreaContainer>) => {
  const isDarkMode = useColorScheme() === "dark";
  const styles = useStyles();

  return (
    <SafeAreaView
      {...rest}
      style={styles.background}
      edges={[...edges, "right", "left"]}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
