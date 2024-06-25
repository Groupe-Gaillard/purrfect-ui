import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import styled from "styled-components";
import { heading1, sizing } from "../../guidelines/theme";
import Select from "./Select";
import type { OptionProps } from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const options: OptionProps[] = [
  { id: "cat", label: "Cat", description: "The funny animal" },
  {
    id: "dog",
    label: "Dog",
    description: "The description to explain something",
  },
  { id: "kangaroo", label: "Kangaroo" },
  { id: "panda", label: "Panda" },
  { id: "snake", label: "Snake" },
];

const optionsDisabled: OptionProps[] = [
  { id: "cat", label: "Cat" },
  { id: "dog", label: "Dog" },
  { id: "kangaroo", label: "Kangaroo", isDisabled: true },
  { id: "panda", label: "Panda", isDisabled: true },
  { id: "snake", label: "Snake" },
];

export const SelectBase: Story = {
  args: {
    autoFocus: true,
    className: "",
    defaultOpen: false,
    defaultSelectedKey: "",
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    helperText: "Herlper text",
    label: "Select",
    placeholder: "Select an option (I'm the placeholder)",
    name: "myName",
    onSelectionChange: fn(),
    options: options,
  },
  render: (args) => (
    <>
      <Title>Select</Title>
      <Select {...args} />
    </>
  ),
};

export const SelectDisabled: Story = {
  args: {
    isDisabled: true,
    label: "Select isDisabled",
    placeholder: "Select an option",
    name: "myName",
    onSelectionChange: fn(),
    options: options,
  },
  render: (args) => (
    <>
      <Title>Select disabled</Title>
      <Select {...args} />
    </>
  ),
};

export const SelectDisabledOneOption: Story = {
  args: {
    label: "Select option isDisabled",
    placeholder: "Select an option",
    name: "myName",
    onSelectionChange: fn(),
    options: optionsDisabled,
  },
  render: (args) => (
    <>
      <Title>Select, one option is disabled</Title>
      <Select {...args} />
    </>
  ),
};

export const SelectRequired: Story = {
  args: {
    isRequired: true,
    label: "Select disabledKeys",
    placeholder: "Select an option",
    name: "myName",
    onSelectionChange: fn(),
    options: options,
    helperText:
      "You can press the submit button to see the error message when the field is required",
  },
  render: (args) => (
    <>
      <Title>Select disabled one option</Title>
      <form>
        <Select {...args} />
        <button type="submit">Submit</button>
      </form>
    </>
  ),
};
