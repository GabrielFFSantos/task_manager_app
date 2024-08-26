import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
  it("renders the Docs link", () => {
    render(<Home />);
    const docsLink = screen.getByRole("link", { name: /docs/i });
    expect(docsLink).toBeInTheDocument();
  });

  it("renders the Learn link", () => {
    render(<Home />);
    const learnLink = screen.getByRole("link", { name: /learn/i });
    expect(learnLink).toBeInTheDocument();
  });
});
