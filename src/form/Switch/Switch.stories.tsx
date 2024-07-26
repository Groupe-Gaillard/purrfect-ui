import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Switch from "src/form/Switch/Switch";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const switchStory: Story = {
  args: {
    label: "Switch",
  },
  render: (args) => (
    <>
      <Title>Switch</Title>
      <Switch {...args} />
    </>
  ),
};

export const switchDisabled: Story = {
  args: {
    label: "Switch",
    isDisabled: true,
  },
  render: (args) => (
    <>
      <Title>Switch Disabled</Title>
      <Switch {...args} />
    </>
  ),
};
