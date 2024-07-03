import React from "react";
import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
} from "react-aria-components";
import styled, { css } from "styled-components";
import Button from "src/action/Button/Button";
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

const baseStyle = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const StyledButton = styled(Button)<{
  isDisabled?: boolean;
  onPress?: React.MouseEventHandler<HTMLButtonElement>;
}>`
  ${baseStyle}
  ${disabledStyle}
`;

export type LinkProps = AriaLinkProps & {
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
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (isDisabled) {
      return;
    }
    if (!href) {
      //? trigger modal ?
      //? window.location.href redirect ?
    }
  };

  if (href) {
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
        {/* N'arrive pas à appliquer le text decoration sur le svg malgré
        l'encapsulation dans un span */}
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
  } else {
    return (
      <StyledButton onPress={handleClick} isDisabled={isDisabled}>
        {leadingIcon}
        {children}
        {trailingIcon}
      </StyledButton>
    );
  }
};

export default Link;
