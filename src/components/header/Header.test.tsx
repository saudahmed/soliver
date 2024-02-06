import { render } from "@testing-library/react-native";
import Header from "./Header";

describe("Header", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <Header headingText="Test Heading" subHeadingText="14 Artikel" />
    );
    expect(getByText("Test Heading")).toBeTruthy();
    expect(getByText("14 Artikel")).toBeTruthy();
  });

  test("applies styles", () => {
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
