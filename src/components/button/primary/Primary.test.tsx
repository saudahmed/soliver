import { render, fireEvent } from "@testing-library/react-native";
import ButtonPrimary from "./Primary";

describe("ButtonPrimary", () => {
  const onPressMock = jest.fn();

  test("renders correctly", () => {
    const { getByText } = render(
      <ButtonPrimary text="Test" enabled onButtonPress={onPressMock} />
    );
    expect(getByText("Test")).toBeTruthy();
  });

  test("handles button press", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonPrimary text="Test" enabled onButtonPress={onPressMock} />
    );
    fireEvent.press(getByText("Test"));
    expect(onPressMock).toHaveBeenCalled();
  });
});
