import * as React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyles } from ".././src/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { withRouter } from "storybook-addon-react-router-v6";

const DefaultDecorator = (Story: any) => {
  const isDark = false;

  return (
    <ThemeProvider theme={{ isDark }}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [DefaultDecorator, withRouter];

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
