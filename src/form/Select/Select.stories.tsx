import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import styled from "styled-components";
import Select, { Option } from "src/form/Select/Select";
import { heading1, sizing } from "src/guidelines/theme";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const options = [
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

export const Demo: Story = {
  args: {
    autoFocus: true,
    className: "",
    isDisabled: false,
    isRequired: false,
    description: "Helper text",
    label: "Select",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <div>
      <Title>Select</Title>
      <Select {...args}>
        {options.map((oneOption) => {
          return (
            <Option key={oneOption.id} id={oneOption.id}>
              {oneOption.label}
            </Option>
          );
        })}
      </Select>

      <Title>Contained Select</Title>
      <div
        style={{
          width: "350px",
        }}
      >
        <Select {...args}>
          {options.map((oneOption) => {
            return (
              <Option key={oneOption.id} id={oneOption.id}>
                {oneOption.label}
              </Option>
            );
          })}
        </Select>
      </div>
    </div>
  ),
};

const optionsWithDisabledOption = [
  { id: "cat", label: "Cat", description: "The funny animal" },
  {
    id: "dog",
    label: "Dog",
    description: "The description to explain something",
  },
  { id: "kangaroo", label: "Kangaroo" },
  { id: "panda", label: "Panda" },
  { id: "snake", label: "Snake", isDisabled: true },
];

export const DemoWithDisabledOption: Story = {
  args: {
    autoFocus: true,
    className: "",
    isDisabled: false,
    isRequired: false,
    description: "Helper text",
    label: "Select",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <div>
      <Title>Select</Title>
      <Select {...args}>
        {optionsWithDisabledOption.map((oneOption) => {
          return (
            <Option
              key={oneOption.id}
              id={oneOption.id}
              isDisabled={oneOption.isDisabled ?? false}
            >
              {oneOption.label}
            </Option>
          );
        })}
      </Select>
    </div>
  ),
};

export const DisabledSelect: Story = {
  args: {
    autoFocus: true,
    className: "",
    isDisabled: true,
    isRequired: false,
    description: "Helper text",
    label: "Select",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <div>
      <Title>Select</Title>
      <Select {...args}>
        {options.map((oneOption) => {
          return (
            <Option key={oneOption.id} id={oneOption.id}>
              {oneOption.label}
            </Option>
          );
        })}
      </Select>
    </div>
  ),
};

export const RequiredSelect: Story = {
  args: {
    autoFocus: true,
    className: "",
    isDisabled: false,
    isRequired: true,
    description: "Helper text",
    label: "Select",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <div>
      <Title>Select</Title>
      <Select {...args}>
        {options.map((oneOption) => {
          return (
            <Option key={oneOption.id} id={oneOption.id}>
              {oneOption.label}
            </Option>
          );
        })}
      </Select>
    </div>
  ),
};
