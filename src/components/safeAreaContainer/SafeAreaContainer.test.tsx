import { Text, StatusBar } from "react-native";
import { render } from "@testing-library/react-native";
import SafeAreaContainer from "./SafeAreaContainer";

describe("SafeAreaContainer", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <SafeAreaContainer>
        <Text>Test</Text>
      </SafeAreaContainer>
    );

    const container = getByTestId("safearea-container");

    expect(container).toBeOnTheScreen();
  });

  test("applies default styles and edges", () => {
    const { getByTestId } = render(<SafeAreaContainer />);

    const container = getByTestId("safearea-container");

    expect(container.props.style).toEqual({
      backgroundColor: "#ffffff",
      flex: 1,
      paddingTop: 0,
    });

    expect(container.props.edges).toEqual({
      bottom: "off",
      left: "additive",
      right: "additive",
      top: "off",
    });
  });
});
