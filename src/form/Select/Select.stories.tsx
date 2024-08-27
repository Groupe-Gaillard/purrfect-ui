import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FormEvent } from "react";
import React from "react";
import { Text } from "react-aria-components";
import styled from "styled-components";
import Button from "src/action/Button/Button";
import { Option, Select } from "src/form/Select/Select";
import { sizing } from "src/guidelines/theme";
import UploadIcon from "src/icons/Upload";
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
    isLoading: false,
    isRequired: false,
    description: "Helper text",
    label: "Select",
    onSelectionChange: fn(),
    leadingIcon: <UploadIcon />,
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

export const selectWithLoader: Story = {
  args: {
    autoFocus: true,
    isLoading: true,
    label: "Select",
    onSelectionChange: fn(),
  },
  render: (args) => (
    <div>
      <Title>Select with loader</Title>
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

const optionsWithHtmlOption = [
  {
    id: "confo+",
    label: "Fauteuil confo +",
    description: {
      internalRef: "XDF3275EG",
      stockInternally: 2,
      stockCommingSoon: 25,
      supplierRef: "SVGGTX45521WFFWD4852WXFD",
      img: "https://picsum.photos/id/252/50/50",
    },
  },
  {
    id: "confo-",
    label: "Fauteuil confo -",
    description: {
      internalRef: "LIH3275EG",
      stockInternally: 5,
      stockCommingSoon: 0,
      supplierRef: "LH4898ZENBHKDF",
      img: "https://picsum.photos/id/253/50/50",
    },
  },
  { id: "kangaroo", label: "Sans fauteuil" },
];

const StyledTextDescription = styled(Text)`
  display: flex;
  justify-content: space-between;
  gap: ${sizing(16)};
`;

export const DemoWithHtmlOption: Story = {
  args: {
    autoFocus: true,
    isDisabled: false,
    isRequired: false,
    description: "Helper text",
    label: "Select",
    onSelectionChange: fn(),
    items: optionsWithHtmlOption,
  },
  render: (args) => (
    <div>
      <Title>Select</Title>
      <Select {...args}>
        {optionsWithHtmlOption.map((oneOption) => {
          return (
            <Option
              key={oneOption.id}
              id={oneOption.id}
              textValue={oneOption.label}
            >
              <Text slot="label">{oneOption.label}</Text>
              {oneOption.description && (
                <StyledTextDescription slot="description">
                  <div>
                    Réf : {oneOption.description.internalRef}
                    <br />
                    Stock Rousset : {oneOption.description.stockInternally}
                  </div>
                  <div>
                    Réf : {oneOption.description.supplierRef}
                    <br />
                    Stock Rousset : {oneOption.description.stockCommingSoon}
                  </div>
                  <div>
                    <img src={oneOption.description.img} />
                  </div>
                </StyledTextDescription>
              )}
            </Option>
          );
        })}
      </Select>
    </div>
  ),
};
