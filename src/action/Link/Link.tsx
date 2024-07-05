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
    border-bottom: 1px solid ${theme.color.linkDisabled};
  `}
`;

const StyledLink = styled(AriaLink)<{
  isDisabled?: boolean;
  isUnderlined?: boolean;
}>`
  display: flex;
  align-items: center;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  ${body1};
  max-width: max-content;
  display: inline-block;
  line-height: 0.7;
  text-decoration: none;
  border-bottom: ${({ isUnderlined, isDisabled }) =>
    isUnderlined && !isDisabled
      ? `1px solid ${theme.color.linkPrimary}`
      : "none"};

  color: ${theme.color.linkPrimary};
  &:hover {
    color: ${theme.color.linkHover};
    border-bottom: ${({ isUnderlined, isDisabled }) =>
      isUnderlined && !isDisabled
        ? `1px solid ${theme.color.linkHover}`
        : "none"};
  }
  &:active {
    color: ${theme.color.linkActive};
    border-bottom: ${({ isUnderlined, isDisabled }) =>
      isUnderlined && !isDisabled
        ? `1px solid ${theme.color.linkActive}`
        : "none"};
  }
  &:visited {
    color: ${theme.color.linkVisited};
    border-bottom: ${({ isUnderlined, isDisabled }) =>
      isUnderlined && !isDisabled
        ? `1px solid ${theme.color.linkVisited}`
        : "none"};
  }
  ${disabledStyle}
`;

type LinkProps = AriaLinkProps & {
  isUnderlined?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const StyledContainer = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
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
    <StyledContainer>
      <StyledLink
        href={href}
        target={target}
        className={className}
        hrefLang={hrefLang}
        isDisabled={isDisabled}
        isUnderlined={isUnderlined}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </StyledLink>
    </StyledContainer>
  );
};

export default Link;
export type { LinkProps };
