import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import styled from "styled-components";
import { heading1, sizing } from "../../guidelines/theme/index";
import RadioGroup from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const radiosButton = [
  {
    label: "Meow",
    value: "meow",
    id: "idMeow",
  },
  {
    label: "Miaou",
    value: "miaou",
    id: "idMiaou",
  },
  {
    label: "Maullar",
    value: "maullar",
    id: "idMaullar",
  },
];

export const radioGroupBase: Story = {
  args: {
    label: "Boutons radio",
    radio: radiosButton,
    className: "",
    helperText: "Helper text or description",
    id: "idRadioGroup",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    onChange: fn(),
    defaultValue: "miaou",
  },
  render: (args) => (
    <>
      <Title>RadioGroup</Title>
      <RadioGroup {...args} />
    </>
  ),
};

export const radioGroupDisabled: Story = {
  args: {
    label: "RadioButton isDisabled",
    radio: radiosButton,
    isDisabled: true,
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>RadioGroup is disabled</Title>
      <RadioGroup {...args} />
    </>
  ),
};

export const radioGroupOneRadioDisabled: Story = {
  args: {
    label: "Radio isDisabled",
    radio: [
      {
        label: "Meow",
        value: "meow",
        id: "idMeow",
      },
      {
        label: "Miaou",
        value: "miaou",
        id: "idMiaou",
      },
      {
        label: "Maullar",
        value: "maullar",
        id: "idMaullar",
        isDisabled: true,
      },
    ],
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>RadioGroup one radio is disabled</Title>
      <RadioGroup {...args} />
    </>
  ),
};

export const radioGroupReadOnly: Story = {
  args: {
    label: "RadioGroup isReadOnly",
    radio: radiosButton,
    isReadOnly: true,
    onChange: fn(),
    defaultValue: "miaou",
  },
  render: (args) => (
    <>
      <Title>RadioGroup is read only</Title>
      <RadioGroup {...args} />
    </>
  ),
};

export const radioGroupIsRequired: Story = {
  args: {
    label: "RadioGroup isRequired",
    radio: radiosButton,
    helperText:
      "You can press the submit button to see the error message when the field is required",
    isRequired: true,
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>RadioGroup is required</Title>
      <form>
        <RadioGroup {...args} />
        <button type="submit">Submit</button>
      </form>
    </>
  ),
};

export const radioGroupSoloRadio: Story = {
  args: {
    radio: [
      {
        label: "RadioGroup solo button",
        value: "meow",
        id: "idMeow",
      },
    ],
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>RadioGroup juste one radio button</Title>
      <RadioGroup {...args} />
    </>
  ),
};

export const radioGroupHorizontal: Story = {
  args: {
    label: "RadioGroup horizontal",
    radio: radiosButton,
    onChange: fn(),
    orientation: "horizontal",
  },
  render: (args) => (
    <>
      <Title>RadioGroup orientation is horizontal</Title>
      <RadioGroup {...args} />
    </>
  ),
};
