import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { useState } from "react";
import { ModalProvider } from "react-aria";
import Button from "src/action/Button/Button";
import Drawer from "src/display/Drawer/Drawer";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Demo: Story = {
  args: {
    isOpen: true,
    openFrom: "right",
    detent: "content",
    onClose: fn(),
    isDismissable: true,
  },
  render: (args) => {
    return (
      <ModalProvider>
        <Title>Drawer</Title>

        <Drawer {...args}>
          <div>Content</div>
        </Drawer>
      </ModalProvider>
    );
  },
};

export const PlayGround: Story = {
  args: {
    openFrom: "right",
    detent: "content",
    isDismissable: true,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    return (
      <ModalProvider>
        <Title>Drawer</Title>
        <Button onPress={() => setIsOpen(true)}>Open Drawer</Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>Content</div>
        </Drawer>
      </ModalProvider>
    );
  },
};
