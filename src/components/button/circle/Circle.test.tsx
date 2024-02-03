import { render, fireEvent } from "@testing-library/react-native";
import ButtonCircle from "./Circle";

describe("ButtonCircle", () => {
  test("renders correctly", () => {
    const { queryByTestId } = render(
      <ButtonCircle
        iconNameNormal="shopping-outline"
        iconColor="black"
        iconNamePressed="shopping"
        selected={false}
        onButtonPress={() => {}}
      />
    );
    expect(queryByTestId("button-circle")).toBeTruthy();
  });

  test("handles button press", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ButtonCircle
        iconNameNormal="shopping-outline"
        iconColor="black"
        iconNamePressed="shopping"
        selected={false}
        onButtonPress={onPressMock}
      />
    );
    fireEvent.press(getByTestId("button-circle"));
    expect(onPressMock).toHaveBeenCalled();
  });

  test("displays normal icon when not pressed", () => {
    const { queryByTestId } = render(
      <ButtonCircle
        iconNameNormal="shopping-outline"
        iconColor="black"
        iconNamePressed="shopping"
        selected={false}
        onButtonPress={() => {}}
      />
    );
    const icon = queryByTestId("icon-circle");
    expect(icon).toBeTruthy();
  });

  test("displays pressed icon when pressed", () => {
    const { getByTestId } = render(
      <ButtonCircle
        iconNameNormal="shopping-outline"
        iconColor="black"
        iconNamePressed="shopping"
        selected={true}
        onButtonPress={() => {}}
      />
    );
    const icon = getByTestId("icon-circle");
    expect(icon).toBeTruthy();
  });
});
