import { Text, StatusBar } from "react-native";
import { render } from "@testing-library/react-native";
import SafeAreaContainer from "./safeAreaContainer";

describe("SafeAreaContainer", () => {
  test("renders children and applies edges", () => {
    const { getByTestId } = render(
      <SafeAreaContainer edges={["top", "bottom"]}>
        <Text>Test</Text>
      </SafeAreaContainer>
    );

    const container = getByTestId("test-container");

    // Check if the children are rendered
    expect(container).toBeOnTheScreen();
  });

  test("applies edges", () => {
    const { getByTestId } = render(
      <SafeAreaContainer edges={["top", "bottom"]} testID="test-container">
        <Text>Test</Text>
      </SafeAreaContainer>
    );

    const container = getByTestId("test-container");

    // Check if the edges are applied
    expect(container.props.edges).toEqual({
      bottom: "additive",
      left: "additive",
      right: "additive",
      top: "additive",
    });
  });
});
