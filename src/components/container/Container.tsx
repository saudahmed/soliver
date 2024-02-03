import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

/**
 * Container component with the ability to restrict the width of content.
 *
 * @component
 *
 * @param {PropsWithChildren<ContainerProps>} props - The properties of the Container component.
 * @param {React.ReactNode} props.children - The content to be wrapped by the container.
 * @param {number} [props.paddingHorizontal=0] - The horizontal padding for the container.
 * @param {ViewProps} props.rest - Additional ViewProps to be applied to the underlying View component.
 *
 * @example
 * // Basic usage
 * return <Container><MyAwesomeComponent /></Container>
 *
 * // Usage with custom horizontal padding
 * return <Container paddingHorizontal={16}><MyAwesomeComponent /></Container>
 */

export interface ContainerProps extends ViewProps {
  paddingHorizontal?: number;
}

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.main,
  },
}));

const Container = ({
  children,
  paddingHorizontal = 0,
  ...rest
}: PropsWithChildren<ContainerProps>) => {
  const styles = useStyles();

  return (
    <View
      style={[styles.container, { paddingHorizontal }]}
      {...rest}
      testID="container"
    >
      {children}
    </View>
  );
};

export default Container;
