import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React, { FormEvent } from "react";
import Button from "src/action/Button/Button";
import Radio from "src/form/Radio/Radio";
import RadioGroup from "src/form/RadioGroup/RadioGroup";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const radiosButton = [
  {
    label: "Meow",
    value: "meow",
    id: "idMeow",
  },
  {
    label: "Miaou",
    value: "miaou",
    id: "idMiaou",
  },
  {
    label: "Maullar",
    value: "maullar",
    id: "idMaullar",
  },
];

const radiosButtonDisabled = [
  {
    label: "Meow",
    value: "meow",
    id: "idMeow",
  },
  {
    label: "Miaou",
    value: "miaou",
    id: "idMiaou",
  },
  {
    label: "Maullar",
    value: "maullar",
    id: "idMaullar",
    isDisabled: true,
  },
];
const radioSolo = [
  {
    label: "RadioGroup solo button",
    value: "meow",
    id: "idMeow",
  },
];

const orientationArray = ["horizontal", "vertical"];

export const radioGroupBase: Story = {
  args: {
    label: "Boutons radio",
    className: "",
    helperText: "Helper text or description",
    id: "idRadioGroup",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
    onChange: fn(),
    orientation: "vertical",
    defaultValue: "miaou",
  },
  argTypes: {
    orientation: {
      options: orientationArray,
      mapping: { orientationArray },
      control: { type: "select" },
      description: "Display horizontaly or verticaly",
    },
  },
  render: (args) => (
    <>
      <Title>RadioGroup</Title>
      <RadioGroup {...args}>
        {radiosButton.map((oneRadio, index) => (
          <Radio key={index} {...oneRadio} />
        ))}
      </RadioGroup>
    </>
  ),
};

export const radioGroupDisabled: Story = {
  args: {
    label: "RadioButton isDisabled",
    isDisabled: true,
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>RadioGroup is disabled</Title>
      <RadioGroup {...args}>
        {radiosButton.map((oneRadio, index) => (
          <Radio key={index} {...oneRadio} />
        ))}
      </RadioGroup>
    </>
  ),
};

export const radioGroupOneRadioDisabled: Story = {
  args: {
    label: "Radio isDisabled",

    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>RadioGroup one radio is disabled</Title>
      <RadioGroup {...args}>
        {radiosButtonDisabled.map((oneRadio, index) => (
          <Radio key={index} {...oneRadio} />
        ))}
      </RadioGroup>
    </>
  ),
};

export const radioGroupReadOnly: Story = {
  args: {
    label: "RadioGroup isReadOnly",
    isReadOnly: true,
    onChange: fn(),
    defaultValue: "miaou",
  },
  render: (args) => (
    <>
      <Title>RadioGroup is read only</Title>
      <RadioGroup {...args}>
        {radiosButton.map((oneRadio, index) => (
          <Radio key={index} {...oneRadio} />
        ))}
      </RadioGroup>
    </>
  ),
};

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert("Submitted");
};

export const radioGroupIsRequired: Story = {
  args: {
    label: "RadioGroup isRequired",
    helperText:
      "You can press the submit button to see the error message when the field is required",
    isRequired: true,
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>RadioGroup is required</Title>
      <form onSubmit={handleSubmit}>
        <RadioGroup {...args}>
          {radiosButton.map((oneRadio, index) => (
            <Radio key={index} {...oneRadio} />
          ))}
        </RadioGroup>
        <Button type="submit">Submit</Button>
      </form>
    </>
  ),
};

export const radioGroupSoloRadio: Story = {
  args: {
    onChange: fn(),
  },
  render: (args) => (
    <>
      <Title>RadioGroup juste one radio button</Title>
      <RadioGroup {...args}>
        {radioSolo.map((oneRadio, index) => (
          <Radio key={index} {...oneRadio} />
        ))}
      </RadioGroup>
    </>
  ),
};

export const radioGroupHorizontal: Story = {
  args: {
    label: "RadioGroup horizontal",
    onChange: fn(),
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      options: orientationArray,
      mapping: { orientationArray },
      control: { type: "select" },
      description: "Display horizontaly or verticaly",
    },
  },
  render: (args) => (
    <>
      <Title>RadioGroup orientation is horizontal</Title>
      <RadioGroup {...args}>
        {radiosButton.map((oneRadio, index) => (
          <Radio key={index} {...oneRadio} />
        ))}
      </RadioGroup>
    </>
  ),
};
