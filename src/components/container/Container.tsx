import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

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

const Container = ({
  children,
  paddingHorizontal = 0,
  ...rest
}: PropsWithChildren<ContainerProps>) => {
  /**
   * The styles for the Container component.
   */
  const containerStyles = {
    flex: 1,
    paddingHorizontal,
  };

  return (
    <View {...rest} style={containerStyles} testID="container">
      {children}
    </View>
  );
};

export default Container;
