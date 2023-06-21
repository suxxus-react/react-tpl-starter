import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { ToggleThemeContext } from "../../appContext";
import { useDarkMode } from "usehooks-ts";

const header: Meta<typeof Header> = {
  title: "Example/Header",
  component: Header,
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

export default header;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {};
