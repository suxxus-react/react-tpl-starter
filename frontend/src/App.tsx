import React from "react";
import { useDarkMode } from "usehooks-ts";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { ToggleThemeContext } from "./appContext";
import MainView from "./components/views";

/**
 * As a DEMO
 * should bring a list of robots
 * show in a list
 * on Click show show another component with the
 * robot
 *
 */

export default function App(): JSX.Element {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <ThemeProvider theme={{ isDark: isDarkMode }}>
      <GlobalStyles />
      <ToggleThemeContext.Provider
        value={{
          isDarkMode,
          toggle,
        }}
      >
        <MainView />
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
}
