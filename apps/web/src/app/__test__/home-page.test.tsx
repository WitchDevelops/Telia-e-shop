import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page component", () => {
  it("renders without crashing", () => {
    render(<Page />);
    // Check if a basic element from the page is rendered
    expect(screen.getByText(/examples\/with-tailwind/i)).toBeInTheDocument();
  });
});
