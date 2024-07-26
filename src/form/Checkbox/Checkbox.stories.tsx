import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Checkbox from "src/form/Checkbox/Checkbox";
import { body1, sizing } from "src/guidelines/theme/index";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const StyledText = styled.p`
  ${body1}
  margin-top: ${sizing(10)}
`;

const StyledContainer = styled.div`
  display: flex;
`;

export const checkbox: Story = {
  args: {
    label: "Meow",
    isDisabled: false,
    value: "meow",
  },
  render: (args) => (
    <>
      <Title>Checkbox</Title>
      <StyledContainer>
        <Checkbox {...args} />
      </StyledContainer>
    </>
  ),
};
export const checkboxDefaultSelected: Story = {
  args: {
    label: "Meow",
    isDisabled: false,
    value: "default",
    defaultSelected: true,
    isSelected: true,
  },
  render: (args) => (
    <>
      <Title>Checkbox</Title>
      <StyledContainer>
        <Checkbox {...args} />
      </StyledContainer>
    </>
  ),
};

export const checkboxDisabled: Story = {
  args: {
    label: "Meow",
    isDisabled: true,
    value: "disabled",
  },
  render: (args) => (
    <>
      <Title>Checkbox</Title>
      <StyledContainer>
        <Checkbox {...args} />
      </StyledContainer>
    </>
  ),
};

export const checkboxIndeterminate: Story = {
  args: {
    label: "Meow",
    isIndeterminate: true,
  },
  render: (args) => (
    <>
      <Title>Checkbox is Indeterminate</Title>
      <StyledContainer>
        <Checkbox {...args} />
      </StyledContainer>
      <StyledText>
        This behaviour is used when you can select several checkbox, like in the
        Table component
      </StyledText>
    </>
  ),
};
