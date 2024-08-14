import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Avatar from "src/display/Avatar/Avatar";
import { heading1 } from "src/guidelines/theme/typographies";
import { sizing } from "src/utils/utils";

const meta: Meta<typeof Avatar> = {
  title: "display/Avatar",
  component: Avatar,
  args: {
    src: "https://picsum.photos/200/300",
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
    username: "Matou Technologies",
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
