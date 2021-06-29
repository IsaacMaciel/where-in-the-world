import { screen } from "@testing-library/react";
import { render } from "react-dom";

import Home from "../../pages/index";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

jest.mock("../../components/SearchCountry", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock SearchCountry"></div>;
    },
  };
});

jest.mock("../../components/SelectRegion", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock SelectRegion"></div>;
    },
  };
});

jest.mock("../../components/CardCountryList", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CardCountryList"></div>;
    },
  };
});

describe("Page Home", () => {
  it("Should render components correctly", () => {
    renderWithTheme(<Home />)
    expect(screen.getByTestId("Mock SearchCountry")).toBeInTheDocument();
    expect(screen.getByTestId("Mock SelectRegion")).toBeInTheDocument();
    expect(screen.getByTestId("Mock CardCountryList")).toBeInTheDocument();
  });
});
