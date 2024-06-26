import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1, sizing } from "../../guidelines/theme";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

export const radioBase: Story = {
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
      <Radio {...args} />
    </>
  ),
};
