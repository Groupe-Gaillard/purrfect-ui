import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    label: "Meow",
    onClick: fn(),
    isDisabled: false,
  },
};

export const BaseLongName: Story = {
  args: {
    ...Base.args,
    label: "Meow it's a long button to show you I can meow",
  },
};
export const Disable: Story = {
  args: {
    label: "Meow",
    onClick: fn(),
    isDisabled: true,
  },
};
