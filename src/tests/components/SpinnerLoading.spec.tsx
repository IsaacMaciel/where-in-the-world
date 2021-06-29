import { render, screen } from "@testing-library/react";
import { SpinnerLoading } from "../../components/SpinnerLoading";

describe("SpinnerLoading Component", () => {
  it("should render Spinner Correctly", () => {
    render(<SpinnerLoading text="Loading data..." />);
    expect(screen.getByText("Loading data...")).toBeInTheDocument();
  });

  it("should not be able display paragraph when props is not passed", () => {
    render(<SpinnerLoading />);

    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument()
  });
});
