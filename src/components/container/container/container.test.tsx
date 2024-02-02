import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import Container from "./container";

describe("Container", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <Container paddingHorizontal={16}></Container>
    );

    const container = getByTestId("container");

    // Check if the children are rendered
    expect(container).toBeOnTheScreen();
  });

  test("renders children and applies paddingHorizontal style", () => {
    const { getByTestId } = render(
      <Container paddingHorizontal={16}>
        <Text>Test</Text>
      </Container>
    );

    const container = getByTestId("container");

    // Check if the children are rendered
    expect(container.props.children).toEqual(<Text>Test</Text>);

    // Check if the paddingHorizontal style is applied
    expect(container.props.style.paddingHorizontal).toEqual(16);
  });
});
