import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { FormEvent } from "react";
import Button from "src/action/Button/Button";
import Select, { Option } from "src/form/Select/Select";
import { sizing } from "src/guidelines/theme";
import { Title, Title2 } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { id: "cat", label: "Cat" },
  { id: "dog", label: "Dog" },
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
  { id: "cat", label: "Cat" },
  { id: "dog", label: "Dog" },
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

const manyOptions = [
  { id: "cat", label: "Cat" },
  { id: "dog", label: "Dog" },
  { id: "kangaroo", label: "Kangaroo" },
  { id: "buffalo", label: "Buffalo" },
  { id: "sheep", label: "Sheep" },
  { id: "pig", label: "Pig" },
  { id: "cow", label: "Cow" },
  { id: "goat", label: "Goat" },
  { id: "zebu", label: "Zebu" },
  { id: "chicken", label: "Chicken" },
  { id: "donkey", label: "Donkey" },
  { id: "duck", label: "Duck" },
  { id: "honeybee", label: "Honey bee" },
  { id: "horse", label: "Horse" },
  { id: "pigeon", label: "Pigeon" },
  { id: "llama", label: "Llama" },
];

export const DemoWithManyOptions: Story = {
  args: {
    autoFocus: true,
    isDisabled: false,
    isRequired: false,
    description: "Helper text",
    label: "Select",
    heightOptions: "100px",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <div>
      <Title>Select with many options</Title>
      <Select {...args}>
        {manyOptions.map((oneOption) => {
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

const optionsWidths = [
  {
    id: "cat",
    label:
      "A cat is a small, domesticated carnivorous mammal. They're often kept as beloved pets due to their independent and playful nature.",
  },
  {
    id: "dog",
    label:
      "A dog is a domesticated mammal belonging to the same family as wolves. They've been companions to humans for thousands of years.",
  },
  {
    id: "kangaroo",
    label:
      "A kangaroo is a marsupial native to Australia and New Guinea. It's known for its large size, powerful hind legs, and the ability to hop at incredible speeds.",
  },
  {
    id: "panda",
    label:
      "A panda is a large black and white bear native to China. They are known for their distinctive appearance and their love for bamboo.",
  },
  {
    id: "snake",
    label:
      "A snake is a long, limbless reptile. They belong to the same group as lizards but have evolved without legs. Snakes are found in various habitats around the world,",
  },
];

export const SpecialWidthSelect: Story = {
  args: {
    autoFocus: true,
    isDisabled: false,
    description: "Helper text",
    label: "Select",
    widthSelect: sizing(300),
    placeholder: "Choose your pet",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <div>
      <Title2>
        Select with small width on the select and big width on the options
      </Title2>
      <Select {...args}>
        {optionsWidths.map((oneOption) => {
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
