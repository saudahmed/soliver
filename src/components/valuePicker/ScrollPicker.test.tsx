import { render, fireEvent } from "@testing-library/react-native";
import ScrollPicker from "./ScrollPicker"; // adjust this import to your file structure

describe("ScrollPicker", () => {
  const list = [
    { value: "1", label: "Item 1" },
    { value: "2", label: "Item 2" },
    { value: "3", label: "Item 3" },
  ];

  test("renders correctly", () => {
    const onItemPressMock = jest.fn();
    const { getByText } = render(
      <ScrollPicker
        currentValue="1"
        list={list}
        onItemPress={onItemPressMock}
      />
    );
    list.forEach((item) => {
      expect(getByText(item.label)).toBeTruthy();
    });
  });

  test("handles item press", () => {
    const onItemPressMock = jest.fn();
    const { getByText } = render(
      <ScrollPicker
        list={list}
        currentValue="2"
        onItemPress={onItemPressMock}
      />
    );
    fireEvent.press(getByText("Item 1"));
    expect(onItemPressMock).toHaveBeenCalledWith("1");
  });

  test("displays selected item", () => {
    const onItemPressMock = jest.fn();
    const { getByText } = render(
      <ScrollPicker
        list={list}
        currentValue="2"
        onItemPress={onItemPressMock}
      />
    );
    expect(getByText("Item 1").props.style.color).toBe("#bdbdbd");
    expect(getByText("Item 2").props.style.color).toBe("#000000");
    expect(getByText("Item 3").props.style.color).toBe("#bdbdbd");
  });
});
