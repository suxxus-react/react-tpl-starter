import React from "react";
import { render, screen } from "../testUtils";
import MainView from "./";

describe("<MainView> ", () => {
  test("Show the initial view route '/'", () => {
    render(<MainView />, {
      route: "/",
    });

    screen.getByText(/welcome/i);
  });
});
