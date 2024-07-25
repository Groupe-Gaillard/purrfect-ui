import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Avatar from "src/display/Avatar/Avatar";
import { heading1 } from "src/guidelines/theme";
import { sizing } from "src/utils/utils";

const meta: Meta<typeof Avatar> = {
  title: "action/Avatar",
  component: Avatar,
  args: {
    src: "https://i.pinimg.com/736x/e5/18/a6/e518a631f086064879c6697d58efaf1f.jpg",
    isDisabled: false,
    className: "",
    size: "medium",
    alt: "Avatar picture",
    username: "Chat Botté",
  },
};
export default meta;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24, 0, 16)};
`;

type Story = StoryObj<typeof Avatar>;

export const Demo: Story = {
  args: {},

  render: (args) => (
    <>
      <Title>Avatar</Title>
      <Avatar {...args} />
    </>
  ),
};

export const WithoutImage: Story = {
  args: {
    src: undefined,
    username: "Remi Caradec",
    alt: "Maurice",
  },

  render: (args) => (
    <>
      <Title>Without image src</Title>
      <Avatar {...args} />
    </>
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => (
    <>
      <Title>Disabled</Title>
      <Avatar {...args} />
    </>
  ),
};
