import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import styled from "styled-components";
import { heading1, sizing } from "../../guidelines/theme";
import TextArea from "./TextArea";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const textAreaBase: Story = {
  args: {
    autoFocus: true,
    className: "",
    cols: 50,
    helperText: "Helper text or description",
    id: "monId",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    label: "TextArea",
    maxLength: 50,
    minLength: 3,
    name: "meow",
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
    placeholder: "I'm a Placeholder",
    rows: 3,
    value: "",
  },
  render: (args) => (
    <>
      <Title>TextArea</Title>
      <TextArea {...args} />
    </>
  ),
};

export const textAreaDisabled: Story = {
  args: {
    label: "Disabled",
    isDisabled: true,
    helperText: "Helper text or description",
    placeholder: "I'm a Placeholder",
  },
  render: (args) => (
    <>
      <Title>TextArea disabled</Title>
      <TextArea {...args} />
    </>
  ),
};

export const textAreaReadOnly: Story = {
  args: {
    label: "Read only",
    isReadOnly: true,
    helperText: "Helper text or description",
    defaultValue: "read",
  },
  render: (args) => (
    <>
      <Title>TextArea read only</Title>
      <TextArea {...args} />
    </>
  ),
};

export const textAreaIsRequired: Story = {
  args: {
    label: "Is required",
    isRequired: true,
    helperText:
      "You can press the submit button to see the error message when the field is required",
  },
  render: (args) => (
    <>
      <Title>TextArea required</Title>
      <form>
        <TextArea {...args} />
        <button type="submit">Submit</button>
      </form>
    </>
  ),
};
