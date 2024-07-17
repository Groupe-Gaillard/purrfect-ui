import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ModalProvider } from "react-aria";
import Drawer from "src/display/Drawer/Drawer";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Demo: Story = {
  args: { isOpen: true, openFrom: "right", detent: "content" },
  render: (args) => (
    <ModalProvider>
      <Title>Drawer</Title>
      <Drawer {...args}>
        <div>Content</div>
      </Drawer>
    </ModalProvider>
  ),
};
