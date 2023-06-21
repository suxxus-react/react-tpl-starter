import React from "react";
import { render, fireEvent, screen } from "../testUtils";
import Header from "./Header";

describe("<Header> ", () => {
  test("logo exist", () => {
    render(<Header />, {});
    screen.getByText("Waters Group");
  });

  test("Set dark mode was invoked", () => {
    const handleClick = jest.fn();
    render(<Header />, {
      toggle: handleClick,
    });

    fireEvent.click(screen.getByTestId("set-darkmode"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Show Dark/Light mode", () => {
    render(<Header />, {});
    expect(screen.queryByTestId("sun")).not.toBeInTheDocument();

    render(<Header />, { isDarkMode: true });
    expect(screen.getByTestId("sun")).toBeInTheDocument();
  });
});
