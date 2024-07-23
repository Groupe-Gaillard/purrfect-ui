import React from "react";
import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { body1, breakpoints, sizing, theme } from "src/guidelines/theme";
import { Variant } from "../Button/Button";

export type Size = "small" | "normal" | "large";
const linkSize = (size: Size = "normal") => {
  switch (size) {
    case "small":
      return css`
        font-size: ${theme.typographies.fontSize.sm};

        & > svg {
          height: ${sizing(16)};
          width: ${sizing(16)};
        }

        @media ${breakpoints.minWidth.md} {
          font-size: ${theme.typographies.fontSize.base};
        }
      `;
    case "normal":
      return css`
        font-size: ${theme.typographies.fontSize.base};

        & > svg {
          height: ${sizing(18)};
          width: ${sizing(18)};
        }

        @media ${breakpoints.minWidth.md} {
          font-size: ${theme.typographies.fontSize.md};
        }
      `;
    case "large":
      return css`
        font-size: ${theme.typographies.fontSize.md};

        & > svg {
          height: ${sizing(20)};
          width: ${sizing(20)};
        }

        @media ${breakpoints.minWidth.md} {
          font-size: ${theme.typographies.fontSize.lg};
        }
      `;
  }
};

const disabledStyle = css<{ isDisabled?: boolean }>`
  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

const linkColor = (variant: Variant = "link") => {
  const color = theme.color[variant];
  return css`
    color: ${color};
    &:hover:enabled {
      opacity: 0.9;
    }
  `;
};

const StyledLink = styled(AriaLink)<{
  isDisabled?: boolean;
  underline?: "always" | "hovered" | "never";
  variant?: Variant;
  size?: Size;
}>`
  outline: none;
  display: flex;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  ${body1};
  max-width: max-content;
  text-decoration: ${({ isDisabled, underline }) =>
    isDisabled ? "none" : underline === "always" ? "underline" : "none"};
  ${({ variant }) => css`
    ${linkColor(variant)};
  `}

  ${({ size }) => css`
    ${linkSize(size)};
  `}

  &:hover {
    color: ${theme.color.linkHover};
    text-decoration: ${({ isDisabled, underline }) =>
      isDisabled
        ? "none"
        : underline === "hovered"
          ? "underline"
          : underline === "always"
            ? "underline"
            : "none"};
  }
  &:active {
    color: ${theme.color.linkActive};
    text-decoration: ${({ isDisabled, underline }) =>
      isDisabled ? "none" : underline === "always" ? "underline" : "none"};
  }
  &:visited {
    color: ${theme.color.linkVisited};
    text-decoration: ${({ isDisabled, underline }) =>
      isDisabled ? "none" : underline === "always" ? "underline" : "none"};
  }
  ${disabledStyle}
`;

type LinkProps = AriaLinkProps & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  underline?: "always" | "hovered" | "never";
  variant?: Variant;
  size?: Size;
};

const Link = ({
  children,
  leadingIcon,
  trailingIcon,
  href,
  isDisabled,
  target,
  className,
  hrefLang = "fr",
  underline,
  variant,
  size,
}: LinkProps) => {
  return (
    <StyledLink
      href={href}
      target={target}
      className={className}
      hrefLang={hrefLang}
      isDisabled={isDisabled}
      underline={underline}
      variant={variant}
      size={size}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledLink>
  );
};

export default Link;
export type { LinkProps };
