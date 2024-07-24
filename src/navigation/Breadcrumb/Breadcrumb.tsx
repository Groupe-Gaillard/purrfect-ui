import React from "react";
import {
  Breadcrumbs as AriaBreadCrumbs,
  BreadcrumbsProps as AriaBreadCrumbsProps,
  Breadcrumb as AriaBreadcrumb,
  BreadcrumbProps as AriaBreadcrumbItemProps,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { Variant } from "src/action/Button/Button";
import Link from "src/action/Link/Link";
import { body1, theme } from "src/guidelines/theme";

const StyledBreadcrumbs = styled(AriaBreadCrumbs)`
  ${body1}
  display: flex;
  align-items: center;
  list-style: none;
`;

const StyledBreadcrumbItem = styled(AriaBreadcrumb)`
  display: flex;

  &:not(:last-child)::after {
    content: "/";
    padding: 0 5px;
  }
`;

const StyledLink = styled(Link)<{
  onClick?: () => void;
  href?: string;
}>`
  &[data-current] {
    font-weight: ${theme.typographies.fontWeight.bold};
    color: inherit;
    cursor: ${({ href }) => (href ? "pointer" : "default")};
  }
  &[data-focus-visible]:after {
    content: "";
    position: absolute;
    inset: -2px -4px;
    border-radius: ${theme.borderRadius.default};
    border: 2px solid ${theme.color.text.dark};
  }
  &:visited {
    ${({ variant }) =>
      variant
        ? css`
            color: ${theme.color[variant]};
          `
        : css`
            color: inherit;
          `}
  }
  &[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type BreadcrumbsProps<T> = AriaBreadCrumbsProps<T> & {
  items: BreadcrumbItem[];
};

export type BreadcrumbItem = AriaBreadcrumbItemProps & {
  href?: string;
  isDisabled?: boolean;
  variant?: Variant;
};

const Breadcrumb = <T,>(props: BreadcrumbsProps<T>) => {
  return (
    <>
      <StyledBreadcrumbs {...props}>
        {props.items.map((item) => (
          <StyledBreadcrumbItem key={item.id} {...props}>
            <StyledLink
              variant={item.variant}
              href={item.href}
              isDisabled={item.isDisabled}
              className={item.className}
            >
              {item.children}
            </StyledLink>
          </StyledBreadcrumbItem>
        ))}
      </StyledBreadcrumbs>
    </>
  );
};

export default Breadcrumb;
export type { BreadcrumbsProps as BreadcrumbProps };
