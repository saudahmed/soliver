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

    expect(button.props.style[0].borderColor).toBe("#000000");
  });

  test("displays unselected border color", () => {
    const { queryByTestId } = render(
      <ButtonColor color="red" selected={false} onButtonPress={() => {}} />
    );
    const button = queryByTestId("button-color");
    expect(button.props.style[0].borderColor).toBe("#bdbdbd");
  });

  test("applies styles", () => {
    const { getByTestId } = render(
      <ButtonColor color="red" selected onButtonPress={() => {}} />
    );
    expect(getByTestId("button-color").props.style).toEqual([
      { backgroundColor: "#ffffff", borderColor: "#000000" },
      {
        alignItems: "center",
        borderRadius: 12.5,
        borderWidth: 1,
        height: 25,
        justifyContent: "center",
        width: 25,
      },
    ]);
  });
});
