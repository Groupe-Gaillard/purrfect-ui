import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";
import styled from "styled-components";
import { heading1, sizing } from "src/guidelines/theme";
import Default from "src/icons/Default";
import MenuButton from "src/navigation/Menu/MenuButton";

const meta: Meta<typeof MenuButton> = {
  component: MenuButton,
};

export default meta;
type Story = StoryObj<typeof MenuButton>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24, 0, 16)};
`;

export const Demo: Story = {
  args: {
    children: "Meow meow !",
    onPress: fn(),
    isDisabled: false,
    kind: "normal",
    variant: "primary",
    size: "small",
    block: false,
    align: "center",
    textStyle: "uppercase",
  },
  render: (args) => (
    <>
      <Title>Menu Button</Title>
      <MenuButton {...args} />
    </>
  ),
};

export const MenuButtonBlock: Story = {
  args: {
    children: "Block / align: left",
    onPress: fn(),
    isDisabled: false,
    kind: "normal",
    variant: "primary",
    size: "normal",
    block: true,
    align: "left",
    leadingIcon: <Default />,
  },
  render: (args) => (
    <>
      <Title>Menu Button block</Title>
      <MenuButton {...args} />
    </>
  ),
};
