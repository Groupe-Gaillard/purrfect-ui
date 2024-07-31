import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Toast, { toastPositionValues } from "src/feedback/Toast/Toast";
import { AlertDemo } from "src/feedback/Alert/Alert.stories";

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

const Container = styled.div`
  width: 100vh;
  height: 100vh;
`;

export const ToastDemo: Story = {
  args: {
    position: "top-right",
    ...AlertDemo.args,
  },
  argTypes: {
    position: {
      options: toastPositionValues,
      mapping: { toastPositionValues },
      control: { type: "select" },
      description: "",
    },
    ...AlertDemo.argTypes,
  },
  render: (args) => (
    <Container>
      <Toast {...args}>{args.children}</Toast>
    </Container>
  ),
};
