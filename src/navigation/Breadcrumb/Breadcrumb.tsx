/* eslint-disable sort-imports */

/* eslint-enable import/order */
import React from "react";
import {
  Breadcrumbs as AriaBreadCrumbs,
  BreadcrumbProps as AriaBreadCrumbsProps,
  Breadcrumb as AriaBreadcrumb,
} from "react-aria-components";
import styled from "styled-components";
import Link from "src/action/Link/Link";
import { body1 } from "src/guidelines/theme";

const StyledBreadcrumbs = styled(AriaBreadCrumbs)`
  ${body1}
  display: flex;
  align-items: center;
  list-style: none;
`;

const StyledBreadcrumb = styled(AriaBreadcrumb)`
  display: flex;
  &:not(:last-child)::after {
    content: "›";
    padding: 0 5px;
  }
`;

type BreadcrumbProps = AriaBreadCrumbsProps & {
  label?: string;
};

const Breadcrumb = () => {
  return (
    <>
      <StyledBreadcrumbs>
        <StyledBreadcrumb>
          <Link href="/" underline="hovered">
            Home
          </Link>
        </StyledBreadcrumb>
        <StyledBreadcrumb>
          <Link href="/react-aria/" underline="hovered">
            React Aria
          </Link>
        </StyledBreadcrumb>
        <StyledBreadcrumb>
          <Link underline="hovered">StyledBreadcrumbs</Link>
        </StyledBreadcrumb>
      </StyledBreadcrumbs>
    </>
  );
};

export default Breadcrumb;
export type { BreadcrumbProps };
