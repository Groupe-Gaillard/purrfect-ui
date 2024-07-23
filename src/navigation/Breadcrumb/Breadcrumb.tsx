import React from "react";
import {
  Breadcrumbs as AriaBreadCrumbs,
  BreadcrumbsProps as AriaBreadCrumbsProps,
  Breadcrumb as AriaBreadcrumb,
  BreadcrumbProps as AriaBreadcrumbItemProps,
} from "react-aria-components";
import styled from "styled-components";
import Link from "src/action/Link/Link";
import { body1, theme } from "src/guidelines/theme";
import { typographies } from "src/guidelines/theme/typographies";

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
  isDisabled?: boolean;
  variant?: string;
}>`
  &[data-current] {
    font-weight: ${typographies.fontWeight.bold};
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
    color: inherit;
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
  variant?: string;
};

const Breadcrumb = <T,>(props: BreadcrumbsProps<T>) => {
  return (
    <>
      <StyledBreadcrumbs {...props}>
        {props.items.map((item) => (
          <StyledBreadcrumbItem key={item.id} className={props.className}>
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
