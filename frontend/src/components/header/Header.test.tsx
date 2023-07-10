import React from "react";
import { render, screen } from "../testUtils";
import Header from "./Header";

describe("<Header> ", () => {
  test("logo exist", () => {
    render(<Header />, {});
    screen.getByText("Waters Group");
  });
});
