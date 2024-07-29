import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { FormEvent } from "react";
import Button from "src/action/Button/Button";
import TextArea from "src/form/TextArea/TextArea";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert("Submit");
};

export const textAreaBase: Story = {
  args: {
    autoFocus: true,
    className: "",
    helperText: "Helper text or description",
    id: "monId",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    label: "TextArea",
    maxLength: 50,
    minLength: 3,
    name: "meow",
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
    placeholder: "I'm a Placeholder",
    rows: 3,
    value: "",
  },
  render: (args) => (
    <>
      <Title>TextArea</Title>
      <TextArea {...args} />
    </>
  ),
};

export const textAreaDisabled: Story = {
  args: {
    label: "Disabled",
    isDisabled: true,
    helperText: "Helper text or description",
    placeholder: "I'm a Placeholder",
  },
  render: (args) => (
    <>
      <Title>TextArea disabled</Title>
      <TextArea {...args} />
    </>
  ),
};

export const textAreaReadOnly: Story = {
  args: {
    label: "Read only",
    isReadOnly: true,
    helperText: "Helper text or description",
    defaultValue: "read",
  },
  render: (args) => (
    <>
      <Title>TextArea read only</Title>
      <TextArea {...args} />
    </>
  ),
};

export const textAreaIsRequired: Story = {
  args: {
    label: "Is required",
    isRequired: true,
    helperText:
      "You can press the submit button to see the error message when the field is required",
  },
  render: (args) => (
    <>
      <Title>TextArea required</Title>
      <form onSubmit={handleSubmit}>
        <TextArea {...args} />
        <Button type="submit">Submit</Button>
      </form>
    </>
  ),
};
