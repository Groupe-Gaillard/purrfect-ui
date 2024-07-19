import type { Meta } from "@storybook/react";
import React from "react";
import styled, { css } from "styled-components";
import { heading1, theme } from "src/guidelines/theme";
import Breadcrumb, {
  BreadcrumbItem,
  BreadcrumbProps,
} from "src/navigation/Breadcrumb/Breadcrumb";
import { sizing } from "src/utils/utils";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
};

export default meta;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const StyledBreadCrumb = styled(Breadcrumb)<BreadcrumbProps<object>>`
  ${(props) =>
    props.className === "custom-class" &&
    css`
      color: ${theme.color.danger};
      text-transform: uppercase;
    `}
`;

const breadcrumbs: BreadcrumbItem[] = [
  { id: 1, children: "MiaHome", href: "/" },
  { id: 2, children: "Miammy", href: "/" },
  { id: 3, children: "Miamamia" },
];
const breadcrumbsLastHasHref: BreadcrumbItem[] = [
  { id: 1, children: "MiaHome", href: "/" },
  { id: 2, children: "Miammy", href: "/" },
  { id: 3, children: "Miamamia", href: "/" },
];
const breadcrumbsOneDisabled: BreadcrumbItem[] = [
  { id: 1, children: "MiaHome", href: "/" },
  { id: 2, children: "Miammy", href: "/", isDisabled: true },
  { id: 3, children: "Miamamia", href: "/" },
];
const breadcrumbsLargeNumber: BreadcrumbItem[] = [
  { id: 1, children: "MiaHome", href: "/" },
  { id: 2, children: "Category 1", href: "/" },
  { id: 3, children: "Subcategory 1.1", href: "/" },
  { id: 4, children: "Product A", href: "/" },
  { id: 5, children: "Category 2", href: "/" },
  { id: 6, children: "Subcategory 2.1", href: "/" },
  { id: 7, children: "Product B", href: "" },
];

const variantOptions = [
  "primary",
  "success",
  "danger",
  "warning",
  "info",
  "gray",
  "link",
] as const;

export const Demo = {
  args: {
    className: "Breacrumb Class",
    isDisabled: false,
    items: breadcrumbs,
    variant: "primary",
  },
  argsType: {
    className: {
      control: "text",
    },
    isDisabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: variantOptions,
    },
  },

  render: (args: BreadcrumbProps<object>) => {
    return (
      <>
        <Title>Demo</Title>
        <Breadcrumb {...args} />
      </>
    );
  },
};
export const BreadcrumbsLastHasHref = {
  args: {
    items: breadcrumbsLastHasHref,
  },

  render: (args: BreadcrumbProps<object>) => {
    return (
      <>
        <Title>Href on last element</Title>
        <Breadcrumb {...args} />
      </>
    );
  },
};

export const BreadcrumbCustomClassName = {
  args: {
    items: breadcrumbs,
    className: "custom-class",
  },

  render: (args: BreadcrumbProps<object>) => {
    return (
      <>
        <Title>Custom class name</Title>
        <StyledBreadCrumb {...args} />
      </>
    );
  },
};

export const OneDisabled = {
  args: {
    items: breadcrumbsOneDisabled,
  },

  render: (args: BreadcrumbProps<object>) => {
    return (
      <>
        <Title>One elem Disabled State</Title>
        <Breadcrumb {...args} />
      </>
    );
  },
};

export const Disabled = {
  args: {
    items: breadcrumbs,
    isDisabled: true,
  },

  render: (args: BreadcrumbProps<object>) => {
    return (
      <>
        <Title>Disabled State</Title>
        <Breadcrumb {...args} />
      </>
    );
  },
};

export const LargeNumber = {
  args: {
    items: breadcrumbsLargeNumber,
  },

  render: (args: BreadcrumbProps<object>) => {
    return (
      <>
        <Title>Large Number of Breadcrumbs</Title>
        <Breadcrumb {...args} />
      </>
    );
  },
};
