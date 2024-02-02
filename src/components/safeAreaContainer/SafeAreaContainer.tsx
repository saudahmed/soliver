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
 * SafeAreaContainer is a custom container that provides top and bottom safe insets.
 * It also adopts background and status bar color according to the light and dark theme.
 *
 * @component
 *
 * @param {PropsWithChildren<ISafeAreaContainer>} props - The properties of the SafeAreaContainer component.
 * @param {React.ReactNode} props.children - The content to be wrapped by the SafeAreaContainer.
 * @param {Array<Edge>} [props.edges] - An array of edges for which to apply safe area insets.
 * @param {SafeAreaViewProps} props.rest - Additional SafeAreaViewProps to be applied to the underlying SafeAreaView component.
 *
 * @example
 * // Basic usage
 * return <SafeAreaContainer><MyAwesomeComponent /></SafeAreaContainer>
 *
 * // Usage with custom edges and additional props
 * return <SafeAreaContainer edges={['top', 'bottom']} style={{ flex: 1, backgroundColor: 'blue' }}><MyAwesomeComponent /></SafeAreaContainer>
 */

export interface ISafeAreaContainer extends SafeAreaViewProps {
  edges?: Array<Edge>;
}

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  background: {
    backgroundColor: theme.palette.background.main,
    flex: 1,
    paddingTop: theme.spacing(0),
  },
}));

const SafeAreaContainer = ({
  children,
  edges = [],
  ...rest
}: PropsWithChildren<ISafeAreaContainer>) => {
  // Determine if the device is in dark mode
  const isDarkMode = useColorScheme() === "dark";

  // Get styles using the Theme provider
  const styles = useStyles();

  return (
    <SafeAreaView
      {...rest}
      style={styles.background}
      edges={[...edges, "right", "left"]}
      testID="safearea-container"
    >
      {/* Set status bar color based on dark mode */}
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
