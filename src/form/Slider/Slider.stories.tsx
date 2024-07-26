import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Slider from "src/form/Slider/Slider";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Base: Story = {
  args: {
    autoFocus: false,
    defaultValue: 10,
    isDisabled: false,
    label: "Base",
    maxValue: 100,
    minValue: 0,
    name: "name",
    sliderMaxWidth: "500px",
    step: 1,
  },
  render: (args) => (
    <>
      <Title>Slider basic</Title>
      <Slider {...args} />
    </>
  ),
};

export const FormatOptions: Story = {
  args: {
    autoFocus: false,
    defaultValue: 250,
    label: "Format option currency",
    maxValue: 1000,
    minValue: 0,
    step: 10,
    sliderMaxWidth: "500px",
    formatOptions: { style: "currency", currency: "EUR" },
  },
  render: (args) => (
    <>
      <Title>Slider with format Option</Title>
      <Slider {...args} />
    </>
  ),
};

export const Disabled: Story = {
  args: {
    autoFocus: false,
    defaultValue: 25,
    isDisabled: true,
    label: "Disabled",
    maxValue: 100,
    minValue: 0,
    step: 1,
    sliderMaxWidth: "500px",
  },
  render: (args) => (
    <>
      <Title>Slider disabled</Title>
      <Slider {...args} />
    </>
  ),
};
