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
  isUnderlined?: boolean;
  isDisabled?: boolean;
}>`
  ${body1};
  cursor: pointer;
  max-width: max-content;
  text-decoration: ${({ isUnderlined, isDisabled }) =>
    isUnderlined && !isDisabled
      ? `underline ${theme.color.linkPrimary}`
      : "none"};
  color: ${theme.color.linkPrimary};
  &:hover {
    color: ${theme.color.linkHover};
  }
  &:active {
    color: ${theme.color.linkActive};
  }
  &:visited {
    color: ${theme.color.linkVisited};
  }
  ${disabledStyle}
`;
type LinkProps = AriaLinkProps & {
  isUnderlined?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
};

const StyledIconContainer = styled.span<{ isUnderlined?: boolean }>`
  text-decoration: ${({ isUnderlined }) =>
    isUnderlined ? "underline" : "none"};
`;

const Link = ({
  children,
  leadingIcon,
  trailingIcon,
  href,
  isDisabled,
  target,
  className,
  isUnderlined = true,
  hrefLang = "fr",
}: LinkProps) => {
  return (
    <StyledLink
      href={href}
      target={target}
      className={className}
      hrefLang={hrefLang}
      isDisabled={isDisabled}
      isUnderlined={isUnderlined}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {leadingIcon && (
        <StyledIconContainer isUnderlined={isUnderlined}>
          {leadingIcon}
        </StyledIconContainer>
      )}
      {children}
      {trailingIcon && (
        <StyledIconContainer isUnderlined={isUnderlined}>
          {trailingIcon}
        </StyledIconContainer>
      )}
    </StyledLink>
  );
};

export default Link;
export type { LinkProps };
