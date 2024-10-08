import React from "react";
import { useButton, usePress } from "react-aria";
import styled, { css } from "styled-components";
import { Variant } from "src/action/Button/Button";
import { theme } from "src/guidelines/theme";
import { body1 } from "src/guidelines/theme/typographies";
import IconSVG from "src/icons/IconSVG";
import { getContrastYIQ, sizing } from "src/utils/utils";

export type TagSize = "normal" | "large";
const getTagSizeStyles = (size: TagSize = "normal") => {
  switch (size) {
    case "normal":
      return css`
        height: ${sizing(16)};
        padding: ${sizing(2)} ${sizing(4)};

        & > ${IconSVG} {
          height: ${sizing(16)};
          width: ${sizing(16)};
        }
      `;
    case "large":
      return css`
        height: ${sizing(20)};
        padding: ${sizing(4)} ${sizing(8)};

        & > ${IconSVG} {
          height: ${sizing(20)};
          width: ${sizing(20)};
        }
      `;
    default:
      return css``;
  }
};

const tagColor = (variant: Variant = "primary") => {
  const color = theme.color[variant];

  return css`
    color: ${theme.color.text[getContrastYIQ(color)]};
    background-color: ${color};
    &:hover:enabled {
      opacity: 0.9;
    }
  `;
};

export type TagKind = "normal" | "outlined";
const tagKind = (kind: TagKind = "normal", variant: Variant = "primary") => {
  const color = theme.color[variant];

  switch (kind) {
    case "normal":
      return css`
        background-color: ${color};
        color: ${theme.color.text[getContrastYIQ(color)]};
        border: 2px solid ${color};
      `;
    case "outlined":
      return css`
        background-color: ${theme.color.white};
        color: ${color};
        border: 2px solid ${color};

        &:hover:enabled {
          background-color: ${theme.color.gray100};
        }
      `;
  }
};

const StyledButtonSpan = styled.span<{
  size?: TagSize;
  variant?: Variant;
  kind?: TagKind;
  isDisabled?: boolean;
  onPress?: () => void;
}>`
  ${body1}
  ${({ size, kind, variant, onPress }) => css`
    ${getTagSizeStyles(size)};
    ${tagColor(variant)};
    ${tagKind(kind, variant)};
    ${onPress &&
    ` &:hover {
    opacity: 0.9;
  }`}
  `};
  border-radius: ${theme.borderRadius.default};
  display: flex;
  align-items: center;
  gap: ${sizing(4)};
  line-height: normal;

  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type TagProps = {
  size?: TagSize;
  variant?: Variant;
  children?: React.ReactNode;
  kind?: TagKind;
  isDisabled?: boolean;
  onPress?: () => void;
  className?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
};

const Tag = (props: TagProps) => {
  const ref = React.useRef(null);
  const { buttonProps } = useButton(
    {
      ...props,
      elementType: "span",
      isDisabled: props.isDisabled,
    },
    ref,
  );
  const { pressProps } = usePress({
    onPress: props.onPress,
    ref,
  });
  return (
    <StyledButtonSpan
      {...buttonProps}
      {...pressProps}
      ref={ref}
      size={props.size}
      variant={props.variant}
      kind={props.kind}
      isDisabled={props.isDisabled}
      className={props.className}
      onPress={props.onPress}
    >
      {props.leadingIcon}
      {props.children}
      {props.trailingIcon}
    </StyledButtonSpan>
  );
};

export default Tag;
export type { TagProps };
