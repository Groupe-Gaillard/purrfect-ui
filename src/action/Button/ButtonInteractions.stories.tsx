import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import { theme } from "../../guidelines/theme";
import Button from "./Button";

const colors = {
  primary: theme.color.primary,
  gray: theme.color.gray,
  success: theme.color.success,
  danger: theme.color.danger,
  warning: theme.color.warning,
};

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonInteractions: Story = {
  args: {
    bgColor: "gray",
    isDisabled: false,
    label: "Click Me !",
    onClick: fn(),
  },
  argTypes: {
    bgColor: {
      options: Object.keys(colors),
      mapping: { colors },
      control: { type: "select" },
      description: "couleur du bouton",
    },
  },

  render: function Render(args) {
    return <Button {...args} />;
  },
};
