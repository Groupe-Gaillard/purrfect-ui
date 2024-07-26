import type { Meta } from "@storybook/react";
import React from "react";
import styled, { css } from "styled-components";
import { theme } from "src/guidelines/theme";
import Breadcrumb, {
  BreadcrumbItem,
  BreadcrumbProps,
} from "src/navigation/Breadcrumb/Breadcrumb";
import { Title } from "src/utils/StorybookComponents/Titles";
import { sizing } from "src/utils/utils";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
};

export default meta;

const StyledBreadCrumb = styled(Breadcrumb)<BreadcrumbProps<object>>`
  ${(props) =>
    props.className === "custom-class" &&
    css`
      text-transform: uppercase;
      font-weight: ${theme.typographies.fontWeight.bold};
    `}

  & a.custom-class__solo {
    color: ${theme.color.info};
    font-weight: ${theme.typographies.fontWeight.bold};
    border: 1px solid ${theme.color.info};
    border-radius: ${theme.borderRadius.default};
    padding: ${sizing(2)} ${sizing(4)};
  }
`;

const breadcrumbs: BreadcrumbItem[] = [
  { id: 1, children: "MiaHome", href: "/" },
  { id: 2, children: "Miammy", href: "/" },
  { id: 3, children: "Miamamia" },
];
const breadcrumbsWithVariant: BreadcrumbItem[] = [
  { id: 1, children: "MiaHome", href: "/" },
  { id: 2, children: "Miammy", href: "/", variant: "success" },
  { id: 3, children: "Miamamia" },
];
const breadcrumbLinkCustomClassName: BreadcrumbItem[] = [
  { id: 1, children: "MiaHome", href: "/" },
  { id: 2, children: "Miammy", href: "/", className: "custom-class__solo" },
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

export const Demo = {
  args: {
    className: "Breacrumb Class",
    isDisabled: false,
    variant: "primary",
    items: breadcrumbs,
  },
  argTypes: {
    className: {
      control: "text",
    },
    isDisabled: {
      control: "boolean",
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

export const BreadcrumbsWithVariant = {
  args: {
    items: breadcrumbsWithVariant,
  },

  render: (args: BreadcrumbProps<object>) => {
    return (
      <>
        <Title>Color Variant on Item</Title>
        <StyledBreadCrumb {...args} />
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

export const BreadcrumbLinkCustomClassName = {
  args: {
    items: breadcrumbLinkCustomClassName,
  },

  render: (args: BreadcrumbProps<object>) => {
    return (
      <>
        <Title>Custom class name on one Breadcrumb Item</Title>
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
