import { render } from "@testing-library/react-native";
import Thumb from "./Thumb";

describe("RailSelected", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<Thumb name="low" />);
    expect(getByTestId("container")).toBeTruthy();
  });

  test("apply styling when low", () => {
    const { getByTestId } = render(<Thumb name="low" />);

    const innerCircle = getByTestId("container");
    expect(innerCircle.props.style.width).toBe(24);
  });

  test("apply styling when high", () => {
    const { getByTestId } = render(<Thumb name="high" />);

    const innerCircle = getByTestId("container");
    expect(innerCircle.props.style.width).toBe(24);
  });
});
