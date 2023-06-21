import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useDarkMode } from "usehooks-ts";
import MainView from "./";
import { ToggleThemeContext } from "../../appContext";

const mainView: Meta<typeof MainView> = {
  title: "Example/MainView",
  component: MainView,
  decorators: [
    (Story) => {
      const { isDarkMode, toggle } = useDarkMode();

      return (
        <ToggleThemeContext.Provider
          value={{
            isDarkMode,
            toggle,
          }}
        >
          <Story />
        </ToggleThemeContext.Provider>
      );
    },
  ],
};

export default mainView;

type Story = StoryObj<typeof MainView>;

export const Basic: Story = {
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
};
