import React from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import styled, { css } from "styled-components";
import {
  breakpoints,
  getContrastYIQ,
  sizing,
  theme,
} from "src/guidelines/theme";
import {
  buttonLarge,
  buttonNormal,
  buttonSmall,
} from "src/guidelines/theme/typographies";

export type Variant =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "gray"
  | "link"
  | "dark";
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
const buttonSize = (size: Size = "normal", hasChildren: boolean = true) => {
  switch (size) {
    case "small":
      return css`
        gap: ${sizing(6)};
        ${hasChildren && `padding: 0px ${sizing(14)};`}
        ${hasChildren && `height: ${sizing(20)};`}
        border-radius: ${theme.borderRadius.default};
        ${buttonSmall};
        & > svg {
          height: ${hasChildren ? sizing(14) : sizing(12)};
          width: ${hasChildren ? sizing(14) : sizing(12)};
        }

        @media ${breakpoints.minWidth.md} {
          gap: ${sizing(8)};
          ${hasChildren && `padding: 0px ${sizing(16)};`}
          ${hasChildren && `height: ${sizing(24)};`}

          & > svg {
            height: ${hasChildren ? sizing(16) : sizing(14)};
            width: ${hasChildren ? sizing(16) : sizing(14)};
          }
        }
      `;
    case "normal":
      return css`
        ${hasChildren && `gap: ${sizing(10)};`}
        ${hasChildren && `padding: 0px ${sizing(20)};`}
        ${hasChildren && `height: ${sizing(30)};`}
        border-radius: ${theme.borderRadius.default};
        ${buttonNormal};

        & > svg {
          height: ${hasChildren ? sizing(20) : sizing(18)};
          width: ${hasChildren ? sizing(20) : sizing(18)};
        }

        @media ${breakpoints.minWidth.md} {
          ${hasChildren && `gap: ${sizing(12)};`}
          ${hasChildren && `padding: 0px ${sizing(24)};`}
          ${hasChildren && `height: ${sizing(36)};`}

          & > svg {
            height: ${hasChildren ? sizing(24) : sizing(22)};
            width: ${hasChildren ? sizing(24) : sizing(22)};
          }
        }
      `;
    case "large":
      return css`
        ${hasChildren && `gap: ${sizing(13)};`}
        ${hasChildren && `padding: 0px ${sizing(28)};`}
        ${hasChildren && `height: ${sizing(40)};`}
        border-radius: ${theme.borderRadius.large};
        ${buttonLarge};

        & > svg {
          height: ${hasChildren ? sizing(28) : sizing(26)};
          width: ${hasChildren ? sizing(28) : sizing(26)};
        }

        @media ${breakpoints.minWidth.md} {
          ${hasChildren && `gap: ${sizing(16)};`}
          ${hasChildren && `padding: 0px ${sizing(32)};`}
          ${hasChildren && `height: ${sizing(48)};`}

          & > svg {
            ${hasChildren ? `height: ${sizing(32)}` : `height: ${sizing(30)}`}
            ${hasChildren ? `width: ${sizing(32)}` : `width: ${sizing(30)}`}
          }
        }
      `;
  }
};

export type Radius = "normal" | "rounded" | "none";
const radiusSize = (radius: Radius = "normal") => {
  switch (radius) {
    case "rounded":
      return css`
        border-radius: ${theme.borderRadius.round};
      `;
    case "normal":
      return css``;
    case "none":
      return css`
        border-radius: 0;
      `;
  }
};

export type Kind = "normal" | "outlined" | "link";
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
    case "link":
      return css`
        background-color: transparent;
        color: ${color};
        border: 2px solid transparent;

        &:hover:enabled {
          opacity: 0.8;
        }
      `;
  }
};

const StyledButton = styled(AriaButton)<{
  kind?: Kind;
  variant?: Variant;
  size?: Size;
  radius?: Radius;
  hasChildren?: boolean;
}>`
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${sizing(8)};

  ${({ variant, size, kind, radius, hasChildren }) => css`
    ${buttonVariant(variant)};
    ${buttonSize(size, hasChildren)};
    ${buttonKind(kind, variant)};
    ${radiusSize(radius)};
    ${!hasChildren &&
    `
      padding: 0;
      height: auto;
      width: auto;
    `}
  `};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type ButtonProps = AriaButtonProps & {
  kind?: Kind;
  variant?: Variant;
  size?: Size;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  radius?: Radius;
};

const Button = ({
  children,
  onPress,
  kind,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  radius,
  ...others
}: ButtonProps) => {
  const hasChildren = !!children;

  return (
    <StyledButton
      {...others}
      onPress={onPress}
      kind={kind}
      variant={variant}
      size={size}
      radius={radius}
      hasChildren={hasChildren}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledButton>
  );
};

export default Button;
export type { ButtonProps };
