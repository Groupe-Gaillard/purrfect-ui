import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Toast, { toastPositionValues } from "src/feedback/Toast/Toast";
import Toaster, { useToaster } from "src/feedback/Toast/Toaster";
import { Button } from "src/index";
import { AlertDemo } from "src/feedback/Alert/Alert.stories";

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

const Container = styled.div`
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

const ButtonsWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Buttons = () => {
  const toaster = useToaster();

  return (
    <ButtonsWrapper>
      <Button
        variant={"success"}
        onPress={() => toaster.success("Success message")}
      >
        Success
      </Button>
      <Button
        variant={"info"}
        onPress={() =>
          toaster.info("Info message", {
            kind: "outlined",
            position: "top-centered",
          })
        }
      >
        Info
      </Button>
      <Button
        variant={"warning"}
        onPress={() =>
          toaster.warning("Warning message", {
            closeable: true,
            position: "top-left",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant={"danger"}
        onPress={() =>
          toaster.danger("Danger message", {
            position: "bottom-left",
            duration: 3000,
          })
        }
      >
        Danger
      </Button>
    </ButtonsWrapper>
  );
};

export const ToastList = () => {
  return (
    <Toaster>
      <Buttons />
    </Toaster>
  );
};
