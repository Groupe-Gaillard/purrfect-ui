import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Switch from "src/form/Switch/Switch";
import { heading1, sizing } from "src/guidelines/theme/index";

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const switchStory: Story = {
  args: {
    label: "Switch",
  },
  render: (args) => (
    <>
      <Title>Switch</Title>
      <Switch {...args} />
    </>
  ),
};

export const switchDisabled: Story = {
  args: {
    label: "Switch",
    isDisabled: true,
  },
  render: (args) => (
    <>
      <Title>Switch Disabled</Title>
      <Switch {...args} />
    </>
  ),
};
