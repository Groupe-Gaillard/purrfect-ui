import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { FormEvent } from "react";
import Button from "src/action/Button/Button";
import TextField from "src/form/TextField/TextField";
import AddIcon from "src/icons/Add";
import UploadIcon from "src/icons/Upload";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

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

export const textFieldBase: Story = {
  args: {
    autoFocus: true,
    helperText: "Helper text or description",
    id: "myID",
    inputMode: "text",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    label: "TextField",
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
      <Title>TextField</Title>
      <TextField {...args} />
    </>
  ),
};

export const textFieldDisabled: Story = {
  args: {
    label: "Disabled",
    isDisabled: true,
    helperText: "Helper text or description",
    placeholder: "I'm a Placeholder",
  },
  render: (args) => (
    <>
      <Title>TextField disabled</Title>
      <TextField {...args} />
    </>
  ),
};

export const textFieldReadOnly: Story = {
  args: {
    label: "Read only",
    isReadOnly: true,
    helperText: "Helper text or description",
    defaultValue: "read",
  },
  render: (args) => (
    <>
      <Title>TextField read only</Title>
      <TextField {...args} />
    </>
  ),
};

export const textFieldIsRequired: Story = {
  args: {
    label: "Is required",
    isRequired: true,
    helperText:
      "You can press the submit button to see the error message when the field is required",
  },
  render: (args) => (
    <>
      <Title>TextField required</Title>
      <form onSubmit={handleSubmit}>
        <TextField {...args} />
        <button type="submit">Submit</button>
      </form>
    </>
  ),
};

export const textFieldEmail: Story = {
  args: {
    label: "Is required",
    type: "email",
    defaultValue: "test",
    isRequired: true,
    helperText:
      "You can press the submit button to see the error message when the entry is not an email format",
  },
  render: (args) => (
    <>
      <Title>TextField with type Email</Title>
      <form method="GET">
        <TextField {...args} />
        <Button type="submit">Submit</Button>
      </form>
    </>
  ),
};
