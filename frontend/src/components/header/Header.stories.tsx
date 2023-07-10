import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const header: Meta<typeof Header> = {
  title: "Example/Header",
  component: Header,
};

export default header;

type Story = StoryObj<typeof Header>;
export const Basic: Story = {};
