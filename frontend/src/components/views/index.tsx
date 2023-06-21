import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../header/Header";

function Start() {
  // ...example
  return <h1>Welcome ...</h1>;
}

export default function MainView(): JSX.Element {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </div>
    </>
  );
}
