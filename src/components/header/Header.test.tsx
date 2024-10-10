import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from ".";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

jest.mock("../user_menu", () => ({
  __esModule: true,
  default: () => <div>User Menu</div>,
}));

describe("Header component", () => {
  test("renders the header component", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders the logo image", () => {
    render(<Header />);
    const logoElement = screen.getByAltText("Logo icon");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders the UserMenu component", () => {
    render(<Header />);
    const userMenuElement = screen.getByText("User Menu");
    expect(userMenuElement).toBeInTheDocument();
  });
});
