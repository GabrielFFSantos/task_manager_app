import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button, { ButtonProps } from ".";

describe("Button component", () => {
  const buttonText = "Click me";

  it("should render the button with default props", () => {
    render(<Button>{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn primary medium");
  });

  it("should apply the correct color and size classes", () => {
    render(
      <Button color="secondary" size="large">
        {buttonText}
      </Button>,
    );

    const button = screen.getByRole("button", { name: buttonText });
    expect(button).toHaveClass("btn secondary large");
  });

  it("should handle click events", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should pass additional props to the button element", () => {
    render(<Button disabled>{buttonText}</Button>);

    const button = screen.getByRole("button", { name: buttonText });
    expect(button).toBeDisabled();
  });
});
