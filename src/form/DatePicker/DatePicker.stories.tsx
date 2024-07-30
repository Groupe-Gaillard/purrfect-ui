import { getLocalTimeZone, today } from "@internationalized/date";
import type { Meta, StoryObj } from "@storybook/react";
import React, { FormEvent } from "react";
import Button from "src/action/Button/Button";
import DatePicker from "src/form/DatePicker/DatePicker";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const datePickerBase: Story = {
  args: {
    label: "Choose your date",
    isDisabled: false,
    isRequired: false,
    helperText: "This is a helper text",
  },
  render: (args) => (
    <>
      <Title>DatePicker</Title>
      <DatePicker {...args} />
    </>
  ),
};

export const datePickerDisabled: Story = {
  args: {
    label: "DatePicker isDisabled",
    isDisabled: true,
  },
  render: (args) => (
    <>
      <Title>DatePicker disabled</Title>
      <DatePicker {...args} />
    </>
  ),
};

export const datePickerDateLimit: Story = {
  args: {
    label: "Choose your date",
    minValue: today(getLocalTimeZone()),
    maxValue: today(getLocalTimeZone()).add({ months: 3 }),
    helperText:
      "This DatePicker is limited between today and 3 months added today",
  },
  render: (args) => (
    <>
      <Title>DatePicker with limit dates</Title>
      <DatePicker {...args} />
    </>
  ),
};

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert("Submit");
};

export const datePickerRequired: Story = {
  args: {
    label: "Choose your date",
    isRequired: true,
    helperText:
      "You can press the submit button to see the error message when the field is required",
  },
  render: (args) => (
    <>
      <Title>DatePicker isRequired</Title>
      <form onSubmit={handleSubmit}>
        <DatePicker {...args} />
        <Button type="submit">Submit</Button>
      </form>
    </>
  ),
};
