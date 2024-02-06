import { render } from "@testing-library/react-native";
import RailSelected from "./RailSelected";

describe("RailSelected", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<RailSelected />);
    expect(getByTestId("container")).toBeTruthy();
  });
});
