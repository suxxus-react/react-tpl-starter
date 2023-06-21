import { createContext } from "react";
import { Theme } from "./types";

export const ToggleThemeContext = createContext<Theme>({
  toggle: (a) => a,
  isDarkMode: false,
});
