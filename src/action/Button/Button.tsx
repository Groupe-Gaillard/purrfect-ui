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
        gap: ${sizing(6)};
        height: ${sizing(20)};
        padding: 0px ${sizing(14)};
        border-radius: ${theme.borderRadius.default};
        ${buttonSmall};

        & > svg {
          height: ${sizing(14)};
          width: ${sizing(14)};
        }

        @media ${breakpoints.minWidth.md} {
          gap: ${sizing(8)};
          height: ${sizing(24)};
          padding: 0px ${sizing(16)};

          & > svg {
            height: ${sizing(16)};
            width: ${sizing(16)};
          }
        }
      `;
    case "normal":
      return css`
        gap: ${sizing(10)};
        height: ${sizing(30)};
        padding: 0px ${sizing(20)};
        border-radius: ${theme.borderRadius.default};
        ${buttonNormal};

        & > svg {
          height: ${sizing(20)};
          width: ${sizing(20)};
        }

        @media ${breakpoints.minWidth.md} {
          gap: ${sizing(12)};
          height: ${sizing(36)};
          padding: 0px ${sizing(24)};

          & > svg {
            height: ${sizing(24)};
            width: ${sizing(24)};
          }
        }
      `;
    case "large":
      return css`
        gap: ${sizing(13)};
        height: ${sizing(40)};
        padding: 0px ${sizing(28)};
        border-radius: ${theme.borderRadius.large};
        ${buttonLarge};

        & > svg {
          height: ${sizing(28)};
          width: ${sizing(28)};
        }

        @media ${breakpoints.minWidth.md} {
          gap: ${sizing(16)};
          height: ${sizing(48)};
          padding: 0px ${sizing(32)};

          & > svg {
            height: ${sizing(32)};
            width: ${sizing(32)};
          }
        }
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
        border: 0;

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
};

const Button = ({
  children,
  onPress,
  kind,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  ...others
}: ButtonProps) => {
  return (
    <StyledButton
      {...others}
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
export type { ButtonProps };
