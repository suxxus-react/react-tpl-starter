import type { Meta, StoryObj } from "@storybook/react";
import MainView from "./";

const mainView: Meta<typeof MainView> = {
  title: "Example/MainView",
  component: MainView,
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
