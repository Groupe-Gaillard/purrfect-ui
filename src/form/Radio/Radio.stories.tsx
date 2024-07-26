import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Label, RadioGroup } from "react-aria-components";
import styled from "styled-components";
import Radio from "src/form/Radio/Radio";
import { body1 } from "src/guidelines/theme";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

const StyledLabel = styled(Label)`
  ${body1}
`;

export const radioBase: Story = {
  args: {
    label: "Bouton radio",
    className: "",
    id: "idRadio",
    isDisabled: false,
    value: "myValue",
  },
  render: (args) => (
    <>
      <Title>RadioGroup</Title>
      <RadioGroup>
        <StyledLabel>Radio single</StyledLabel>
        <Radio {...args} />
      </RadioGroup>
    </>
  ),
};

export const radioDisabled: Story = {
  args: {
    label: "Bouton radio",
    className: "",
    id: "idRadio",
    isDisabled: true,
    value: "myValue",
  },
  render: (args) => (
    <>
      <Title>RadioGroup</Title>
      <RadioGroup>
        <StyledLabel>Radio single</StyledLabel>
        <Radio {...args} />
      </RadioGroup>
    </>
  ),
};
