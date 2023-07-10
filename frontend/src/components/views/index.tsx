import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../../styles/globalStyles";
import Header from "../header/Header";
import { ToggleThemeContextProvider } from "../../context";
import { Children } from "../../types";

function Start() {
  // ...example
  return <h1>Welcome ...</h1>;
}

function Providers({ children }: Children): JSX.Element {
  return <ToggleThemeContextProvider>{children}</ToggleThemeContextProvider>;
}

export default function MainView(): JSX.Element {
  return (
    <Providers>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </Providers>
  );
}
