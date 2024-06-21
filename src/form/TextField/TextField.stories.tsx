import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import styled from "styled-components";
import { heading1, sizing } from "../../guidelines/theme";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

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

export const textFieldBase: Story = {
  args: {
    autoFocus: true,
    helperText: "Helper text or description",
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
      <form>
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
        <button type="submit">Submit</button>
      </form>
    </>
  ),
};
