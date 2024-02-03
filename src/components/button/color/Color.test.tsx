import { render, fireEvent } from "@testing-library/react-native";
import ButtonColor from "./Color";

describe("ButtonColor", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <ButtonColor color="red" selected onButtonPress={() => {}} />
    );
    expect(getByTestId("button-color")).toBeTruthy();
  });

  test("handles button press", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ButtonColor color="red" selected onButtonPress={onPressMock} />
    );
    fireEvent.press(getByTestId("button-color"));
    expect(onPressMock).toHaveBeenCalled();
  });

  test("displays normal color on inner circle", () => {
    const { getByTestId } = render(
      <ButtonColor color="red" selected onButtonPress={() => {}} />
    );

    const innerCircle = getByTestId("inner-circle");
    expect(innerCircle.props.style[1].backgroundColor).toBe("red");
  });

  test("displays selected border color", () => {
    const { getByTestId } = render(
      <ButtonColor color="red" selected onButtonPress={() => {}} />
    );
    const button = getByTestId("button-color");

    expect(button.props.style.borderColor).toBe("#000000");
  });

  test("displays unselected border color", () => {
    const { getByTestId } = render(
      <ButtonColor color="red" selected={false} onButtonPress={() => {}} />
    );
    const button = getByTestId("button-color");
    expect(button.props.style.borderColor).toBe("#bdbdbd");
  });

  test("applies styles", () => {
    const { getByTestId } = render(
      <ButtonColor color="red" selected onButtonPress={() => {}} />
    );
    expect(getByTestId("button-color").props.style).toEqual({
      width: 25,
      height: 25,
      borderRadius: 12.5,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#000000",
      backgroundColor: "#ffffff",
    });
  });
});
