import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { heading1 } from "src/guidelines/theme";
import PlusIcon from "src/icons/plus";
import { sizing } from "src/utils/utils";
import Link from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    leadingIcon: {
      control: "boolean",
    },
    trailingIcon: {
      control: "boolean",
    },
    isUnderlined: {
      control: "boolean",
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
  },
};
export default meta;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

type Story = StoryObj<typeof Link>;

export const standardLink: Story = {
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
