import { render } from "@testing-library/react-native";
import Rail from "./Rail";

describe("Rail", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Rail />);
    expect(getByTestId("container")).toBeTruthy();
  });
});
