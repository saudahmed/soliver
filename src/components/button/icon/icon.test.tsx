import { render, fireEvent } from "@testing-library/react-native";
import ButtonIcon from "./icon";

describe("ButtonIcon", () => {
  const onPressMock = jest.fn();

  test("renders correctly", () => {
    const { getByText } = render(
      <ButtonIcon
        text="Test"
        border
        iconName="sort"
        iconPosition="left"
        onButtonPress={onPressMock}
      />
    );
    expect(getByText("Test")).toBeTruthy();
  });

  test("handles button press", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonIcon
        text="Test"
        border
        iconName="sort"
        iconPosition="left"
        onButtonPress={onPressMock}
      />
    );
    fireEvent.press(getByText("Test"));
    expect(onPressMock).toHaveBeenCalled();
  });

  test("displays icon on the left", () => {
    const { queryByTestId } = render(
      <ButtonIcon
        text="Test"
        iconPosition="left"
        iconName="home"
        border
        onButtonPress={onPressMock}
      />
    );

    const leftIcon = queryByTestId("icon-left");
    const rightIcon = queryByTestId("icon-right");

    expect(leftIcon).toBeTruthy();
    expect(rightIcon).toBeFalsy();
  });

  test("displays icon on the right", () => {
    const { queryByTestId } = render(
      <ButtonIcon
        text="Test"
        iconPosition="right"
        iconName="home"
        border
        onButtonPress={onPressMock}
      />
    );

    const leftIcon = queryByTestId("icon-left");
    const rightIcon = queryByTestId("icon-right");

    expect(rightIcon).toBeTruthy();
    expect(leftIcon).toBeFalsy();
  });

  test("applies with border style", () => {
    const { getByTestId } = render(
      <ButtonIcon
        text="Test"
        iconPosition="right"
        iconName="home"
        border
        onButtonPress={onPressMock}
      />
    );
    expect(getByTestId("button").props.style).toEqual({
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10,
      paddingVertical: 12,
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "#000000",
      borderRadius: 4,
    });
  });

  test("applies without border style", () => {
    const { getByTestId } = render(
      <ButtonIcon
        text="Test"
        iconPosition="right"
        iconName="home"
        border={false}
        onButtonPress={onPressMock}
      />
    );
    expect(getByTestId("button").props.style).toEqual({
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      flexDirection: "row",
    });
  });
});
