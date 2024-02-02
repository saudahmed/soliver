import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import Container from "./Container";

describe("Container", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <Container paddingHorizontal={16}></Container>
    );

    const container = getByTestId("container");

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

  test("applies default styles", () => {
    const { getByTestId } = render(<Container />);
    expect(getByTestId("container").props.style).toEqual({
      flex: 1,
      paddingHorizontal: 0,
    });
  });

  test("applies custom styles", () => {
    const { getByTestId } = render(<Container paddingHorizontal={16} />);
    expect(getByTestId("container").props.style).toEqual({
      flex: 1,
      paddingHorizontal: 16,
    });
  });
});
