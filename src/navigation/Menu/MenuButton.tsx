import React from "react";
import styled, { css } from "styled-components";
import Button, { ButtonProps } from "src/action/Button/Button";
import { Variant } from "src/action/Button/Button";
import { theme } from "src/guidelines/theme";

const blockSize = (block?: boolean) => {
  return css`
    width: ${block ? "100%" : "auto"};
  `;
};

export type Align = "left" | "center" | "right";
const alignContent = (align: Align = "center") => {
  switch (align) {
    case "left":
      return css`
        justify-content: left;
      `;
    case "center":
      return css``;
    case "right":
      return css`
        justify-content: right;
      `;
  }
};

export type TextStyle = "capitalize" | "uppercase" | "lowercase" | "normal";
const textTransform = (textStyle: TextStyle = "uppercase") => {
  switch (textStyle) {
    case "normal":
      return css`
        text-transform: none;
      `;
    case "capitalize":
    case "uppercase":
    case "lowercase":
      return css`
        text-transform: ${textStyle};
      `;
  }
};

const StyledMenuButton = styled(Button)<{
  block?: boolean;
  align?: Align;
  textStyle?: TextStyle;
  variant?: Variant;
}>`
  --background-color-hover: ${({ variant }) =>
    variant === "dark"
      ? theme.color.gray100
      : theme.color[`${variant}100` ?? "primary100"]};

  ${({ block, align, textStyle }) => css`
    ${blockSize(block)};
    ${alignContent(align)};
    ${textTransform(textStyle)};
  `};

  background-color: transparent;
  color: ${({ variant }) => theme.color[variant ?? "primary"]};
  border: 2px solid transparent;

  &:hover {
    background-color: var(--background-color-hover);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type MenuButtonProps = ButtonProps & {
  block?: boolean;
  align?: Align;
  textStyle?: TextStyle;
};

const MenuButton = ({
  children,
  onPress,
  kind,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  radius,
  ...others
}: MenuButtonProps) => {
  return (
    <StyledMenuButton
      {...others}
      onPress={onPress}
      kind={kind}
      variant={variant}
      size={size}
      radius={radius}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledMenuButton>
  );
};

export default MenuButton;
export type { MenuButtonProps };
