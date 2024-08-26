/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("renders the main content", () => {
    // Verifica se o conteúdo principal está presente
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    expect(screen.getByText(/src\/app\/page.tsx/i)).toBeInTheDocument();
  });

  test("renders the Vercel logo with a link", () => {
    const vercelLink = screen.getByRole("link", { name: /By/i });
    expect(vercelLink).toHaveAttribute(
      "href",
      "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    expect(screen.getByAltText("Vercel Logo")).toBeInTheDocument();
  });

  test("renders the Next.js logo", () => {
    expect(screen.getByAltText("Next.js Logo")).toBeInTheDocument();
  });

  test("renders Docs card", () => {
    const docsCard = screen.getByRole("link", { name: /Docs/i });
    expect(docsCard).toHaveAttribute(
      "href",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    expect(docsCard).toHaveTextContent(
      /Find in-depth information about Next.js features and API/i
    );
  });

  test("renders Learn card", () => {
    const learnCard = screen.getByRole("link", { name: /Learn/i });
    expect(learnCard).toHaveAttribute(
      "href",
      "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    expect(learnCard).toHaveTextContent(
      /Learn about Next.js in an interactive course with quizzes!/i
    );
  });

  test("renders Templates card", () => {
    const templatesCard = screen.getByRole("link", { name: /Templates/i });
    expect(templatesCard).toHaveAttribute(
      "href",
      "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    expect(templatesCard).toHaveTextContent(
      /Explore starter templates for Next.js/i
    );
  });

  test("renders Deploy card", () => {
    const deployCard = screen.getByRole("link", { name: /Deploy/i });
    expect(deployCard).toHaveAttribute(
      "href",
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    expect(deployCard).toHaveTextContent(
      /Instantly deploy your Next.js site to a shareable URL with Vercel/i
    );
  });
});
