import { render } from "@testing-library/react-native";
import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Header headingText="Test Heading" subHeadingText="Test Subheading" />
    );
    expect(getByText("Test Heading")).toBeTruthy();
    expect(getByText("Test Subheading")).toBeTruthy();
  });

  it("applies styles", () => {
    const { getByTestId } = render(
      <Header headingText="Test Heading" subHeadingText="Test Subheading" />
    );
    expect(getByTestId("header").props.style).toEqual({
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    });
  });
});
