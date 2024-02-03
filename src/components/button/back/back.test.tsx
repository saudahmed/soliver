import { render, fireEvent } from "@testing-library/react-native";
import ButtonBack from "./back";

describe("ButtonBack", () => {
  test("renders correctly", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonBack onButtonPress={onPress} />);
    expect(getByTestId("button-back")).toBeTruthy();
  });

  test("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonBack onButtonPress={onPress} />);

    fireEvent.press(getByTestId("button-back"));
    expect(onPress).toHaveBeenCalled();
  });

  test("displays the back arrow icon", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonBack onButtonPress={onPress} />);
    expect(getByTestId("back-arrow-icon")).toBeTruthy();
  });
});
