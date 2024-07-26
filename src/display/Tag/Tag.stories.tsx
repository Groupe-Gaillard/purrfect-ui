import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import { Variant } from "src/action/Button/Button";
import Tag, { TagKind, TagProps, TagSize } from "src/display/Tag/Tag";
import { heading1, sizing, theme } from "src/guidelines/theme";
import AddIcon from "src/icons/Add";
import Default from "src/icons/Default";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Display/Tag",
};

export default meta;
type Story = StoryObj<typeof Tag>;

const ListContainer = styled.div`
  display: flex;
  gap: ${sizing(32)};
  flex-wrap: wrap;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizing(8)};
  align-items: center;
  min-width: ${sizing(200)};
  text-align: center;
  border: 1px solid ${theme.color.gray};
  border-radius: ${theme.borderRadius.default};
  padding: ${sizing(16)};
  box-shadow: ${theme.shadows.base};
`;

const ListTitle = styled.p<{ color: Variant; isDisabled?: boolean }>`
  padding: 0;
  width: 100%;
  ${heading1};
  text-transform: capitalize;
  color: ${({ color, isDisabled }) =>
    isDisabled ? theme.color.gray : theme.color[color]};
  display: flex;
  margin: ${sizing(16, 0)};
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: ${sizing(8)};
`;

const Title = styled.p<{ color: Variant }>`
  ${heading1};
  color: ${({ color }) => theme.color[color]};
  margin: ${sizing(16, 0)};
`;

export const TagList = () => {
  const tagVariants: Array<Variant> = [
    "primary",
    "success",
    "warning",
    "danger",
    "info",
    "gray",
  ];
  const tagSizes: Array<TagSize> = ["normal", "large"];
  const tagState: Array<boolean> = [false, true];
  const withIcon: Array<boolean> = [true, false];
  const tagKind: Array<TagKind> = ["normal", "outlined"];

  return (
    <ListContainer>
      {tagVariants.map((variant) => (
        <Block key={variant}>
          <ListTitle color={variant}>{variant}</ListTitle>
          {tagSizes.map((size) =>
            tagState.map((isDisabled) =>
              tagKind.map((kind) =>
                withIcon.map((icon) => (
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                    }}
                    key={`${variant}-${size}-${isDisabled ? "disabled" : "enabled"}-${kind}-${icon ? "icon" : "no-icon"}`}
                  >
                    <Tag
                      variant={variant}
                      size={size}
                      isDisabled={isDisabled}
                      kind={kind}
                      leadingIcon={icon ? <AddIcon /> : undefined}
                      trailingIcon={icon ? <Default /> : undefined}
                    >
                      Tag
                    </Tag>
                  </div>
                )),
              ),
            ),
          )}
        </Block>
      ))}
    </ListContainer>
  );
};

const RenderTag = ({
  args,
  title,
  variant = "primary",
}: {
  args: TagProps & { variant?: Variant };
  title: string;
  variant?: Variant;
}) => (
  <>
    <Title color={args.variant || variant}>{title}</Title>
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
    trailingIcon: <Default />,
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
