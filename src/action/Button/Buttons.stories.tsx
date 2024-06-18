import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  // disabled the control pannel on storybook
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
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

export const ButtonList = () => {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Button label="Primary" bgColor="primary" onClick={fn()} />
      <Button
        label="Primary disabled"
        isDisabled
        bgColor="primary"
        onClick={fn()}
      />
      <Button label="Success" bgColor="success" onClick={fn()} />
      <Button
        label="Success disabled"
        isDisabled
        bgColor="success"
        onClick={fn()}
      />
      <Button label="Danger" bgColor="danger" onClick={fn()} />
      <Button
        label="Danger disabled"
        isDisabled
        bgColor="danger"
        onClick={fn()}
      />
      <Button label="Warning" bgColor="warning" onClick={fn()} />
      <Button
        label="Warning disabled"
        isDisabled
        bgColor="warning"
        onClick={fn()}
      />
      <Button label="Gray" bgColor="gray" onClick={fn()} />
      <Button label="Gray disabled" isDisabled bgColor="gray" onClick={fn()} />
      <Button label="Info" bgColor="info" onClick={fn()} />
      <Button label="Info disabled" isDisabled bgColor="info" onClick={fn()} />
    </div>
  );
};
