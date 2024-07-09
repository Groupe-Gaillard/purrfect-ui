import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Tag, { TagProps } from "src/display/Tag/Tag";
import { heading1, sizing } from "src/guidelines/theme";
import DeleteIcon from "src/icons/delete";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Display/Tag",
};

export default meta;
type Story = StoryObj<typeof Tag>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const StyledContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: ${sizing(8)};
`;

const RenderTag = ({ args, title }: { args: TagProps; title: string }) => (
  <>
    <Title>{title}</Title>
    <StyledContainer>
      <Tag {...args} />
    </StyledContainer>
  </>
);

export const Base: Story = {
  args: {
    children: "Tag",
  },
  render: (args) => RenderTag({ args, title: "Base" }),
};

export const Outlined: Story = {
  args: {
    children: "Tag",
    variant: "danger",
    kind: "outlined",
  },
  render: (args) => RenderTag({ args, title: "Outlined" }),
};

export const Large: Story = {
  args: {
    children: "Tag",
    variant: "success",
    size: "large",
  },
  render: (args) => RenderTag({ args, title: "Large" }),
};

export const Disabled: Story = {
  args: {
    children: "Tag",
    isDisabled: true,
  },
  render: (args) => RenderTag({ args, title: "Disabled" }),
};

export const WithIcon: Story = {
  args: {
    children: "Tag",
    variant: "info",
    size: "large",
    trailingIcon: (
      <DeleteIcon
        onClick={() => alert("Do something with the tag")}
        style={{ height: "14px", width: "14px" }}
      />
    ),
  },
  render: (args) => RenderTag({ args, title: "With Icon" }),
};
export const Clickable: Story = {
  args: {
    children: "Tag",
    variant: "warning",
    size: "large",
    onPress: () => alert("Do something with the tag"),
  },
  render: (args) => RenderTag({ args, title: "Clickable" }),
};
