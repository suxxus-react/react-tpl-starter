import React from "react";
import styled from "styled-components";
import { useToggleThemeContext } from "../../context";
import { logo } from "../../styles/AppStyles";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--header-bg);
  color: var(--header-color);
`;

const Iso = styled.div`
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  ${logo}
`;

const Logo = styled.div`
  font-weight: bold;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export default function Header() {
  const { isDarkMode, toggle } = useToggleThemeContext();

  return (
    <Wrapper>
      <Logo>
        <Iso></Iso>
        <h1>Waters Group</h1>
      </Logo>
      <button
        data-testid="set-darkmode"
        type="button"
        onClick={() => {
          toggle((v) => !v);
        }}
      >
        <i
          data-testid={isDarkMode ? "sun" : "moon"}
          className={`fa fa-${isDarkMode ? "sun" : "moon"}-o`}
          aria-hidden="true"
        ></i>
      </button>
    </Wrapper>
  );
}
