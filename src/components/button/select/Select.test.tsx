import { render, fireEvent } from "@testing-library/react-native";
import ButtonSelect from "./Select";

describe("ButtonSelect", () => {
  const onPressMock = jest.fn();

  test("renders correctly", () => {
    const { getByText } = render(
      <ButtonSelect text="Test" selected onButtonPress={onPressMock} />
    );
    expect(getByText("Test")).toBeTruthy();
  });

  test("handles button press", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonSelect text="Test" selected onButtonPress={onPressMock} />
    );
    fireEvent.press(getByText("Test"));
    expect(onPressMock).toHaveBeenCalled();
  });
});
