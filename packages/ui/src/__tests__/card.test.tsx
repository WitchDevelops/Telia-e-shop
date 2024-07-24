import { render, screen } from "@testing-library/react";
import { Card } from "../card";

describe("Card Component", () => {
  // Test if the Card component renders with given title and children
  test("renders card component with title and description", () => {
    render(
      <Card href="#" title="Test Title">
        Test Description
      </Card>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  // Test if the title has the correct tag name
  test("renders title with correct tag", () => {
    render(
      <Card href="#" title="Test Title">
        Test Description
      </Card>
    );
    const titleElement = screen.getByText("Test Title");
    expect(titleElement.tagName).toBe("H2");
  });

  // Test if the link opens in a new tab with correct attributes
  test("link opens in a new tab with correct attributes", () => {
    render(
      <Card href="#" title="Test Title">
        Test Description
      </Card>
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  // Test if the arrow is visible and positioned correctly
  test("arrow is visible and correctly positioned", () => {
    render(
      <Card href="#" title="Test Title">
        Test Description
      </Card>
    );
    const arrowElement = screen.getByText("->");
    expect(arrowElement).toBeInTheDocument();
    expect(arrowElement).toHaveClass("group-hover:ui-translate-x-1");
  });
});
