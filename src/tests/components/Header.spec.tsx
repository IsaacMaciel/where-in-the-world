import { render, screen, fireEvent } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { useLayout } from "../../context/themeContext";
import { Header } from "../../components/Header";

jest.mock("../../context/themeContext");

describe("Header Component ", () => {
  it("should render name application", () => {
    const useLayoutMocked = mocked(useLayout);
    useLayoutMocked.mockReturnValueOnce({
      bg: "#ffffff",
      colorMode: "light",
      colorText: "black",
      isMobile: false,
      toggleColorMode: jest.fn(),
    });
    render(<Header />);
    expect(screen.getByText("Where in the world ?")).toBeInTheDocument();
  });

  it("should render button correctly", () => {
    const useLayoutMocked = mocked(useLayout);
    const toggleMock = jest.fn()
    useLayoutMocked.mockReturnValueOnce({
      bg: "#ffffff",
      colorMode: "light",
      colorText: "black",
      isMobile: false,
      toggleColorMode: toggleMock
    });
    render(<Header />);
    const buttonTheme = screen.getByRole("button", { name: "Dark Mode"})
    fireEvent.click(buttonTheme)
    expect(buttonTheme).toBeInTheDocument()
    expect(toggleMock).toBeCalled()
  });

  it("should render button with Dark theme", () => {
    const useLayoutMocked = mocked(useLayout);
    useLayoutMocked.mockReturnValueOnce({
      bg: "#ffffff",
      colorMode: "dark",
      colorText: "black",
      isMobile: false,
      toggleColorMode: jest.fn(),
    });
    render(<Header />);

    expect(screen.getByRole("button", { name: "Light Mode"})).toBeInTheDocument()
  });
});
