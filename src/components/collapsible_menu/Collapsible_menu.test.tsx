import { render, screen, fireEvent } from "@testing-library/react";
import CollapsibleMenu from ".";
import "@testing-library/jest-dom";

describe("CollapsibleMenu", () => {
  it("deve renderizar o ícone de seta para a direita inicialmente", () => {
    render(<CollapsibleMenu>Menu Content</CollapsibleMenu>);

    const rightArrow = screen.getByAltText("Right arrow icon");
    expect(rightArrow).toBeInTheDocument();
  });

  it("deve alternar para o ícone de seta para a esquerda ao clicar no ícone de seta para a direita", () => {
    render(<CollapsibleMenu>Menu Content</CollapsibleMenu>);

    const rightArrow = screen.getByAltText("Right arrow icon");
    fireEvent.click(rightArrow);

    const leftArrow = screen.getByAltText("Left arrow icon");
    expect(leftArrow).toBeInTheDocument();
  });

  it("deve exibir o conteúdo do menu corretamente", () => {
    render(<CollapsibleMenu>Menu Content</CollapsibleMenu>);

    const menuContent = screen.getByText("Menu Content");
    expect(menuContent).toBeInTheDocument();
  });

  it("deve fechar o menu quando o ícone de seta para a esquerda for clicado", () => {
    render(<CollapsibleMenu>Menu Content</CollapsibleMenu>);

    const rightArrow = screen.getByAltText("Right arrow icon");
    fireEvent.click(rightArrow);

    const leftArrow = screen.getByAltText("Left arrow icon");
    fireEvent.click(leftArrow);

    expect(screen.getByAltText("Right arrow icon")).toBeInTheDocument();
  });
});
