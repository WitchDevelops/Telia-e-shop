import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page component", () => {
  test("renders without crashing", () => {
    render(<Page />);
    // Check if a basic element from the page is rendered
    expect(screen.getByText(/examples\/with-tailwind/i)).toBeInTheDocument();
  });
  // Test if the header section with a specific text is rendered
  test("renders header section with correct text", () => {
    render(<Page />);
    expect(screen.getByText(/examples\/with-tailwind/i)).toBeInTheDocument();
    expect(screen.getByText(/web/i)).toBeInTheDocument();
  });
  // Test if the footer section with the Vercel logo and link is rendered
  test("renders footer section with Vercel logo and link", () => {
    render(<Page />);
    expect(screen.getByRole("link", { name: /by/i })).toHaveAttribute(
      "href",
      "https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
    );
    expect(screen.getByAltText(/vercel logo/i)).toBeInTheDocument();
  });
});
