import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { useState } from "react";
import { ModalProvider } from "react-aria";
import Button from "src/action/Button/Button";
import Drawer, { DrawerProps } from "src/display/Drawer/Drawer";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const StoryComponent = (props: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalProvider>
      <Title>Drawer</Title>
      <Button onPress={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer {...props} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>Content</div>
      </Drawer>
    </ModalProvider>
  );
};

export const Demo: Story = {
  args: {
    isOpen: false,
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

export const OpenLeft: Story = {
  args: {
    isDismissable: true,
  },
  render: (arg) => StoryComponent({ ...arg, openFrom: "left" }),
};

export const OpenRight: Story = {
  args: {
    isDismissable: true,
  },
  render: (arg) => StoryComponent({ ...arg, openFrom: "right" }),
};

export const DetentContent: Story = {
  args: {
    isDismissable: true,
    openFrom: "right",
  },
  render: (arg) => StoryComponent({ ...arg, detent: "content" }),
};

export const DetentFull: Story = {
  args: {
    isDismissable: true,
    openFrom: "right",
  },
  render: (arg) => StoryComponent({ ...arg, detent: "full" }),
};

export const WithHeaderAndFooter: Story = {
  args: {
    isDismissable: true,
    openFrom: "right",
  },
  render: (arg) =>
    StoryComponent({
      ...arg,
      header: <div>Header</div>,
      footer: <div>Footer</div>,
    }),
};
