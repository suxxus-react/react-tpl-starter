import React, { ReactElement } from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ToggleThemeContext } from "../appContext";
import { Users } from "../types";

export type Props = {
  route: string;
  isDarkMode: boolean;
  toggle: (a: unknown) => void;
  ids: number[];
  users: Users;
};

function customRender(
  ui: ReactElement,
  {
    route = "",
    isDarkMode = false,
    toggle = (a) => a,
    ...renderOptions
  }: Partial<Props>
) {
  function wrapper({ children }: { children: React.ReactNode }) {
    return (
      <ToggleThemeContext.Provider
        value={{
          isDarkMode,
          toggle,
        }}
      >
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </ToggleThemeContext.Provider>
    );
  }

  return render(ui, { wrapper, ...renderOptions });
}

export * from "@testing-library/user-event";
export * from "@testing-library/react";
export { customRender as render };
