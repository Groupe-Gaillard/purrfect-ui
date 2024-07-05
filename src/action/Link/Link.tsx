import React from "react";
import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { body1, theme } from "src/guidelines/theme";

const disabledStyle = css<{ isDisabled?: boolean }>`
  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

const StyledLink = styled(AriaLink)<{
  isDisabled?: boolean;
  underline?: "always" | "hovered" | "never";
}>`
  outline: none;
  display: flex;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  ${body1};
  max-width: max-content;
  text-decoration: ${({ isDisabled, underline }) =>
    isDisabled ? "none" : underline === "always" ? "underline" : "none"};
  color: ${theme.color.linkPrimary};
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
}: LinkProps) => {
  return (
    <StyledLink
      href={href}
      target={target}
      className={className}
      hrefLang={hrefLang}
      isDisabled={isDisabled}
      underline={underline}
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
