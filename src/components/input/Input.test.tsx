import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from ".";
import { useForm } from "react-hook-form";

describe("Input component", () => {
  const mockRegister = jest.fn();

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const { register } = useForm();
    return (
      <form>
        {React.cloneElement(children as React.ReactElement, { register })}
      </form>
    );
  };

  test("renders the input with default props", () => {
    render(
      <Wrapper>
        <Input name="test-input" label="Test Label" register={mockRegister} />
      </Wrapper>,
    );
    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toBeInTheDocument();
  });

  test("applies the correct classes based on color and size props", () => {
    render(
      <Wrapper>
        <Input
          name="test-input"
          color="secondary"
          size="large"
          register={mockRegister}
        />
      </Wrapper>,
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("secondary");
    expect(inputElement).toHaveClass("large");
  });

  test("renders error message when error prop is passed", () => {
    const errorMessage = "This is an error";
    render(
      <Wrapper>
        <Input
          name="test-input"
          error={<span>{errorMessage}</span>}
          register={mockRegister}
        />
      </Wrapper>,
    );
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  test("passes additional props to the input element", () => {
    render(
      <Wrapper>
        <Input
          name="test-input"
          placeholder="Enter text here"
          register={mockRegister}
        />
      </Wrapper>,
    );
    const inputElement = screen.getByPlaceholderText("Enter text here");
    expect(inputElement).toBeInTheDocument();
  });
});
