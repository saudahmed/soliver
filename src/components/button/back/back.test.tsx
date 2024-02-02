import { render, fireEvent } from "@testing-library/react-native";
import ButtonBack from "./Back";

describe("ButtonBack", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<ButtonBack />);
    expect(getByTestId("button-back")).toBeTruthy();
  });

  test("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<ButtonBack onPress={onPress} />);

    fireEvent.press(getByTestId("button-back"));
    expect(onPress).toHaveBeenCalled();
  });

  test("displays the back arrow icon", () => {
    const { getByTestId } = render(<ButtonBack />);
    expect(getByTestId("back-arrow-icon")).toBeTruthy();
  });
});
