import { render } from "@testing-library/react-native";
import HorizontalDivider from "./Horizontal"; // adjust this import to your file structure

describe("HorizontalDivider", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<HorizontalDivider />);
    expect(getByTestId("divider")).toBeTruthy();
  });

  test("applies styles", () => {
    const { getByTestId } = render(<HorizontalDivider fullWidth />);
    expect(getByTestId("divider").props.style).toEqual([
      { backgroundColor: "#bdbdbd", height: 0.5 },
      undefined,
      { width: "100%" },
    ]);
  });
});
