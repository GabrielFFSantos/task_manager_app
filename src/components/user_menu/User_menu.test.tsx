import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UserMenu from ".";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import { logOut } from "../../helpers/auth";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../helpers/auth", () => ({
  logOut: jest.fn(),
}));

describe("UserMenu", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar o ícone de usuário", () => {
    render(<UserMenu />);

    const userIcon = screen.getByAltText("User icon");
    expect(userIcon).toBeInTheDocument();
  });

  it("deve abrir o menu suspenso ao clicar no ícone de usuário", () => {
    render(<UserMenu />);

    const userIcon = screen.getByAltText("User icon");
    fireEvent.click(userIcon);

    const profileLink = screen.getByText("Profile");
    expect(profileLink).toBeInTheDocument();
  });

  it("deve fechar o menu suspenso ao clicar fora do menu", () => {
    render(<UserMenu />);

    const userIcon = screen.getByAltText("User icon");
    fireEvent.click(userIcon);

    const profileLink = screen.getByText("Profile");
    expect(profileLink).toBeInTheDocument();

    const backdrop = screen.getByTestId("backdrop");
    fireEvent.click(backdrop);

    expect(profileLink).not.toBeInTheDocument();
  });

  it("deve redirecionar para a página de perfil ao clicar em 'Profile'", () => {
    render(<UserMenu />);

    const userIcon = screen.getByAltText("User icon");
    fireEvent.click(userIcon);

    const profileLink = screen.getByText("Profile");
    fireEvent.click(profileLink);

    expect(mockPush).toHaveBeenCalledWith("/profile");
  });

  it("deve chamar a função de logout e redirecionar para a página de autenticação", async () => {
    render(<UserMenu />);

    const userIcon = screen.getByAltText("User icon");
    fireEvent.click(userIcon);

    const logoutLink = screen.getByText("Logout");
    fireEvent.click(logoutLink);

    await waitFor(() => {
      expect(logOut).toHaveBeenCalled();
      expect(mockPush).toHaveBeenCalledWith("/auth");
    });
  });
});
