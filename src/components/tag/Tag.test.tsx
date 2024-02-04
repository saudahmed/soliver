import { render } from "@testing-library/react-native";
import Tag from "./Tag"; // adjust this import to your file structure

describe("Tag", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Tag backgroundColor="green" textColor="white" text="Test" />
    );
    expect(getByText("Test")).toBeTruthy();
  });

  it("applies styles", () => {
    const { getByTestId } = render(
      <Tag text="Test" backgroundColor="red" textColor="white" />
    );
    expect(getByTestId("tag").props.style).toEqual([
      {
        alignItems: "center",
        alignSelf: "flex-start",
        justifyContent: "center",
        padding: 4,
        width: "auto",
      },
      { backgroundColor: "red" },
    ]);
    expect(getByTestId("tag-text").props.style).toEqual([
      { fontFamily: "Lato-Regular", fontSize: 18, textTransform: "uppercase" },
      { color: "white" },
    ]);
  });
});
