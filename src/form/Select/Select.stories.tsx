import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { FormEvent } from "react";
import Button from "src/action/Button/Button";
import Select, { Option } from "src/form/Select/Select";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

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

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert("Submit");
};

export const Demo: Story = {
  args: {
    autoFocus: true,
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
    isDisabled: false,
    isRequired: true,
    description: "Helper text",
    label: "Select",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <div>
      <Title>Select</Title>
      <form onSubmit={handleSubmit}>
        <Select {...args}>
          {options.map((oneOption) => {
            return (
              <Option key={oneOption.id} id={oneOption.id}>
                {oneOption.label}
              </Option>
            );
          })}
        </Select>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  ),
};
