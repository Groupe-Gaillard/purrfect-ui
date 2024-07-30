import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { FormEvent } from "react";
import Button from "src/action/Button/Button";
import Checkbox from "src/form/Checkbox/Checkbox";
import CheckboxGroup from "src/form/CheckboxGroup/CheckboxGroup";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const checkBoxButton = [
  {
    label: "Meow",
    value: "meow",
  },
  {
    label: "Miaou",
    value: "miaou",
  },
  {
    label: "Maullar",
    value: "maullar",
  },
];

const checkBoxButtonDisabled = [
  {
    label: "Meow",
    value: "meow",
  },
  {
    label: "Miaou",
    value: "miaou",
    isDisabled: true,
  },
  {
    label: "Maullar",
    value: "maullar",
  },
];

export const checkboxGroupBase: Story = {
  args: {
    label: "Checkbox group",
    className: "",
    helperText: "Helper text or description",
    id: "idCheckboxGroup",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    onChange: fn(),
    defaultValue: ["miaou"],
  },
  render: (args) => (
    <>
      <Title>Checkbox Group</Title>
      <CheckboxGroup {...args}>
        {checkBoxButton.map((oneCheckbox, index) => (
          <Checkbox key={index} {...oneCheckbox} />
        ))}
      </CheckboxGroup>
    </>
  ),
};

export const checkboxGroupDisabled: Story = {
  args: {
    label: "Checkbox group isDisabled",
    isDisabled: true,
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>Checkbox Group is disabled</Title>
      <CheckboxGroup {...args}>
        {checkBoxButton.map((oneCheckbox, index) => (
          <Checkbox key={index} {...oneCheckbox} />
        ))}
      </CheckboxGroup>
    </>
  ),
};

export const checkboxGroupOneCheckboxDisabled: Story = {
  args: {
    label: "Checkbox group one checkbox isDisabled",
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>Checkbox Group is disabled</Title>
      <CheckboxGroup {...args}>
        {checkBoxButtonDisabled.map((oneCheckbox, index) => (
          <Checkbox key={index} {...oneCheckbox} />
        ))}
      </CheckboxGroup>
    </>
  ),
};

export const checkboxGroupReadOnly: Story = {
  args: {
    label: "Checkbox group isReadOnly",
    isReadOnly: true,
    onChange: fn(),
    defaultValue: ["miaou"],
  },
  render: (args) => (
    <>
      <Title>Checkbox Group is read only</Title>
      <CheckboxGroup {...args}>
        {checkBoxButton.map((oneCheckbox, index) => (
          <Checkbox key={index} {...oneCheckbox} />
        ))}
      </CheckboxGroup>
    </>
  ),
};

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert("Submitted");
};

export const checkboxGroupIsRequired: Story = {
  args: {
    label: "Checkbox group isRequired",
    helperText:
      "You can press the submit button to see the error message when the field is required",
    isRequired: true,
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>Checkbox Group is required</Title>
      <form onSubmit={handleSubmit}>
        <CheckboxGroup {...args}>
          {checkBoxButton.map((oneCheckbox, index) => (
            <Checkbox key={index} {...oneCheckbox} />
          ))}
        </CheckboxGroup>
        <Button type="submit">Submit</Button>
      </form>
    </>
  ),
};
