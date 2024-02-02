import { render, fireEvent } from "@testing-library/react-native";
import ButtonCross from "./Cross";

describe("ButtonCross", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<ButtonCross />);
    expect(getByTestId("button-cross")).toBeTruthy();
  });

  test("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonCross onPress={onPress} />);

    fireEvent.press(getByTestId("button-cross"));
    expect(onPress).toHaveBeenCalled();
  });

  test("displays the close icon", () => {
    const { getByTestId } = render(<ButtonCross />);
    expect(getByTestId("close-icon")).toBeTruthy();
  });
});
