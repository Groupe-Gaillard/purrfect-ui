import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { FormEvent } from "react";
import Button from "src/action/Button/Button";
import Input from "src/form/Input/Input";
import AddIcon from "src/icons/Add";
import UploadIcon from "src/icons/Upload";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const inputModeArray = [
  "none",
  "text",
  "tel",
  "url",
  "email",
  "numeric",
  "decimal",
  "search",
];
const inputTypeArray = ["text", "search", "url", "tel", "email", "password"];

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert("Submit");
};

export const InputBase: Story = {
  args: {
    autoFocus: true,
    id: "myID",
    inputMode: "text",
    maxLength: 50,
    minLength: 3,
    name: "meow",
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
    pattern: "",
    placeholder: "I'm a Placeholder",
    type: "text",
    value: "",
    leadingIcon: <AddIcon />,
    trailingIcon: <UploadIcon />,
  },
  argTypes: {
    inputMode: {
      options: inputModeArray,
      mapping: { inputModeArray },
      control: { type: "select" },
      description: "Input mode on phone or tablet device",
    },
    type: {
      options: inputTypeArray,
      mapping: { inputTypeArray },
      control: { type: "select" },
      description: "Input type",
    },
  },
  render: (args) => (
    <>
      <Title>Input</Title>
      <Input {...args} />
    </>
  ),
};

export const InputDisabled: Story = {
  args: {
    disabled: true,
    placeholder: "I'm a Placeholder",
  },
  render: (args) => (
    <>
      <Title>Input disabled</Title>
      <Input {...args} />
    </>
  ),
};

export const InputReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: "read",
  },
  render: (args) => (
    <>
      <Title>Input read only</Title>
      <Input {...args} />
    </>
  ),
};

export const InputIsRequired: Story = {
  args: {
    required: true,
  },
  render: (args) => (
    <>
      <Title>Input required</Title>
      <form onSubmit={handleSubmit}>
        <Input {...args} />
        <button type="submit">Submit</button>
      </form>
    </>
  ),
};

export const InputEmail: Story = {
  args: {
    type: "email",
    defaultValue: "test",
  },
  render: (args) => (
    <>
      <Title>Input with type Email</Title>
      <form method="GET">
        <Input {...args} />
        <Button type="submit">Submit</Button>
      </form>
    </>
  ),
};
