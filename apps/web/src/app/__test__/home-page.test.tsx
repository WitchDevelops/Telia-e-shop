import { render, screen } from "@testing-library/react";
import Page, { LINKS } from "../page";

test("renders page with cards", () => {
  render(<Page />);

  // Check for the presence of card titles
  expect(screen.getByText("Docs")).toBeInTheDocument();
  expect(screen.getByText("Learn")).toBeInTheDocument();
  expect(screen.getByText("Templates")).toBeInTheDocument();
  expect(screen.getByText("Deploy")).toBeInTheDocument();
});

test("renders Card components with correct props", () => {
  render(<Page />);

  // Verify Card components
  LINKS.forEach(({ title, description }) => {
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
