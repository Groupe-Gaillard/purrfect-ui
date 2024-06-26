import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Checkbox from "src/form/Checkbox/Checkbox";
import { heading1, sizing } from "src/guidelines/theme/index";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const checkbox: Story = {
  args: {
    label: "Meow",
    isDisabled: false,
    value: "meow",
  },
  render: (args) => (
    <>
      <Title>Checkbox</Title>
      <div
        style={{
          display: "flex",
        }}
      >
        <Checkbox {...args} />
      </div>
    </>
  ),
};
export const checkboxDefaultSelected: Story = {
  args: {
    label: "Meow",
    isDisabled: false,
    value: "default",
    defaultSelected: true,
    isSelected: true,
  },
  render: (args) => (
    <>
      <Title>Checkbox</Title>
      <div
        style={{
          display: "flex",
        }}
      >
        <Checkbox {...args} />
      </div>
    </>
  ),
};
export const checkboxDisabled: Story = {
  args: {
    label: "Meow",
    isDisabled: true,
    value: "disabled",
  },
  render: (args) => (
    <>
      <Title>Checkbox</Title>
      <div
        style={{
          display: "flex",
        }}
      >
        <Checkbox {...args} />
      </div>
    </>
  ),
};
