import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1, sizing } from "../../guidelines/theme/index";
import Checkbox from "./Checkbox";

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
    className: "",
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
    className: "",
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
    className: "",
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
