import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import Container from "./Container";

describe("Container", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <Container paddingHorizontal={16}></Container>
    );

    const container = getByTestId("container");

    expect(container).toBeTruthy();
  });

  test("renders children", () => {
    const { getByTestId } = render(
      <Container>
        <Text>Test</Text>
      </Container>
    );

    const container = getByTestId("container");

    // Check if the children are rendered
    expect(container.props.children).toEqual(<Text>Test</Text>);
  });

  test("applies default styles", () => {
    const { getByTestId } = render(<Container />);
    expect(getByTestId("container").props.style).toEqual([
      { backgroundColor: "#ffffff", flex: 1 },
      { paddingHorizontal: 0 },
    ]);
  });

  test("applies custom padding", () => {
    const { getByTestId } = render(<Container paddingHorizontal={16} />);
    expect(getByTestId("container").props.style).toEqual([
      { backgroundColor: "#ffffff", flex: 1 },
      { paddingHorizontal: 16 },
    ]);
  });
});
