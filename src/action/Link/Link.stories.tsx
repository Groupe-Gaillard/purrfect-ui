import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Link from "src/action/Link/Link";
import AddIcon from "src/icons/Add";
import { Title } from "src/utils/StorybookComponents/Titles";

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
    size: "normal",
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Demo: Story = {
  args: {},

  render: (args) => (
    <>
      <Title>Link</Title>
      <Link
        {...args}
        leadingIcon={args.leadingIcon ? <AddIcon /> : undefined}
        trailingIcon={args.trailingIcon ? <AddIcon /> : undefined}
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
        leadingIcon={args.leadingIcon ? <AddIcon /> : undefined}
        trailingIcon={args.trailingIcon ? <AddIcon /> : undefined}
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
        leadingIcon={args.leadingIcon ? <AddIcon /> : undefined}
        trailingIcon={args.trailingIcon ? <AddIcon /> : undefined}
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
        leadingIcon={args.leadingIcon ? <AddIcon /> : undefined}
        trailingIcon={args.trailingIcon ? <AddIcon /> : undefined}
      >
        {args.children}
      </Link>
    </>
  ),
};

export const SizeLink: Story = {
  render: () => (
    <>
      <Title>Never Underlined Link</Title>
      <Link size="small">Small link</Link>
      <Link size="normal">Normal link</Link>
      <Link size="large">Large link</Link>
      <Link size="small" leadingIcon={<AddIcon />}>
        Small link
      </Link>
      <Link size="normal" leadingIcon={<AddIcon />}>
        Normal link
      </Link>
      <Link size="large" leadingIcon={<AddIcon />}>
        Large link
      </Link>
    </>
  ),
};
