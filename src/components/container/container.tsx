import * as React from "react";
import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

export interface ContainerProps extends ViewProps {
  paddingHorizontal?: number;
}

/**
 * S-Oliver container. Restrict width of content.
 * @component
 *
 * @example
 * return <Container><MyAwesomeComponent /></Container>
 */
const Container = ({
  children,
  paddingHorizontal = 0,
  ...rest
}: PropsWithChildren<ContainerProps>) => {
  return (
    <View {...rest} style={{ flex: 1, paddingHorizontal }}>
      {children}
    </View>
  );
};

export default Container;
