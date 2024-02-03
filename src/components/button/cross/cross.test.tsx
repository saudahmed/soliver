import { render, fireEvent } from "@testing-library/react-native";
import ButtonCross from "./cross";

describe("ButtonCross", () => {
  test("renders correctly", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonCross onButtonPress={onPress} />);
    expect(getByTestId("button-cross")).toBeTruthy();
  });

  test("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonCross onButtonPress={onPress} />);

    fireEvent.press(getByTestId("button-cross"));
    expect(onPress).toHaveBeenCalled();
  });

  test("displays the close icon", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonCross onButtonPress={onPress} />);
    expect(getByTestId("close-icon")).toBeTruthy();
  });
});
