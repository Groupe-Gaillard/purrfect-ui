import React from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { getContrastYIQ, sizing, theme } from "src/guidelines/theme";
import { buttonLarge, buttonNormal } from "src/guidelines/theme/typographies";

export type Variant =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "gray";
const buttonVariant = (variant: Variant = "primary") => {
  const color = theme.color[variant];

  return css`
    color: ${theme.color.text[getContrastYIQ(color)]};
    background-color: ${color};

    &:hover:enabled {
      opacity: 0.9;
    }
  `;
};

export type Size = "small" | "normal" | "large";
const buttonSize = (size: Size = "normal") => {
  switch (size) {
    case "small":
      return css`
        gap: ${sizing(8)};
        height: ${sizing(24)};
        padding: 0px ${sizing(16)};
        border-radius: ${theme.borderRadius.default};
        ${buttonNormal};

        & > svg {
          height: ${sizing(16)};
          width: ${sizing(16)};
        }
      `;
    case "normal":
      return css`
        gap: ${sizing(12)};
        height: ${sizing(36)};
        padding: 0px ${sizing(24)};
        border-radius: ${theme.borderRadius.default};
        ${buttonNormal};

        & > svg {
          height: ${sizing(24)};
          width: ${sizing(24)};
        }
      `;
    case "large":
      return css`
        gap: ${sizing(16)};
        height: ${sizing(48)};
        padding: 0px ${sizing(32)};
        border-radius: ${theme.borderRadius.large};
        ${buttonLarge};

        & > svg {
          height: ${sizing(32)};
          width: ${sizing(32)};
        }
      `;
  }
};

export type Kind = "normal" | "outlined";
const buttonKind = (kind: Kind = "normal", variant: Variant = "primary") => {
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

const StyledButton = styled(AriaButton)<{
  kind?: Kind;
  variant?: Variant;
  size?: Size;
}>`
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${sizing(8)};

  ${({ variant, size, kind }) => css`
    ${buttonVariant(variant)};
    ${buttonSize(size)};
    ${buttonKind(kind, variant)};
  `};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  onPress,
  kind,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  ...other
}: AriaButtonProps & {
  kind?: Kind;
  variant?: Variant;
  size?: Size;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <StyledButton
      {...other}
      onPress={onPress}
      kind={kind}
      variant={variant}
      size={size}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledButton>
  );
};

export default Button;
