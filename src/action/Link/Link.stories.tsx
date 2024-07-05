import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1 } from "src/guidelines/theme";
import PlusIcon from "src/icons/plus";
import { sizing } from "src/utils/utils";
import Link from "./Link";

const meta: Meta<typeof Link> = {
  title: "action/Link",
  component: Link,
  argTypes: {
    leadingIcon: {
      control: "boolean",
    },
    trailingIcon: {
      control: "boolean",
    },
    underline: {
      control: { type: "select", options: ["always", "hovered", "never"] },
    },
  },
  args: {
    children: "this is a link",
    href: "#",
    isDisabled: false,
    target: "_blank",
    className: "",
    leadingIcon: false,
    trailingIcon: false,
    underline: "hovered",
  },
};
export default meta;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

type Story = StoryObj<typeof Link>;

export const Demo: Story = {
  args: {},

  render: (args) => (
    <>
      <Title>Link</Title>
      <Link
        {...args}
        leadingIcon={args.leadingIcon ? <PlusIcon /> : undefined}
        trailingIcon={args.trailingIcon ? <PlusIcon /> : undefined}
      >
        {args.children}
      </Link>
    </>
  ),
};

export const AlwaysUnderlined: Story = {
  args: {
    underline: "always",
  },
  render: (args) => (
    <>
      <Title>Always Underlined Link</Title>
      <Link
        {...args}
        leadingIcon={args.leadingIcon ? <PlusIcon /> : undefined}
        trailingIcon={args.trailingIcon ? <PlusIcon /> : undefined}
      >
        {args.children}
      </Link>
    </>
  ),
};

export const HoverUnderlined: Story = {
  args: {
    underline: "hovered",
  },
  render: (args) => (
    <>
      <Title>Hover Underlined Link</Title>
      <Link
        {...args}
        leadingIcon={args.leadingIcon ? <PlusIcon /> : undefined}
        trailingIcon={args.trailingIcon ? <PlusIcon /> : undefined}
      >
        {args.children}
      </Link>
    </>
  ),
};

export const NeverUnderlined: Story = {
  args: {
    underline: "never",
  },
  render: (args) => (
    <>
      <Title>Never Underlined Link</Title>
      <Link
        {...args}
        leadingIcon={args.leadingIcon ? <PlusIcon /> : undefined}
        trailingIcon={args.trailingIcon ? <PlusIcon /> : undefined}
      >
        {args.children}
      </Link>
    </>
  ),
};
