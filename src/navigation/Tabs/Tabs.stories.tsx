import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "src/action/Button/Button";
import FilesIcon from "src/icons/Files";
import Tabs from "src/navigation/Tabs/Tabs";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Tabs> = {
  title: "navigation/Tabs",
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

const tabData = [
  {
    id: "One",
    children: <p>Content of Tab One</p>,
    title: "Title of One",
    className: "tab-1",
  },
  {
    id: "Two",
    children: <p>Content of Tab Two</p>,
    title: "Title of Two",
    className: "tab-2",
  },
  {
    id: "Three",
    children: (
      <>
        <p>Content of Tab Three</p>
        <Button>Button</Button>
      </>
    ),
    title: "Title of Three",
    className: "tab-3",
  },
];

const tabDataWithIcon = [
  {
    id: "One",
    children: <p>Content of Tab One</p>,
    title: "Title of One",
    leadingIcon: <FilesIcon />,
  },
  {
    id: "Two",
    children: <p>Content of Tab Two</p>,
    title: "Title of Two",
    trailingIcon: <FilesIcon />,
  },
  {
    id: "Three",
    children: (
      <>
        <p>Content of Tab Three</p>
        <Button>Button</Button>
      </>
    ),
    title: "Title of Three",
  },
];

export const Demo: Story = {
  args: {
    ariaLabel: "Tab list",
    className: "default-class",
    isDisabled: false,
    keyboardActivation: "automatic",
    orientation: "horizontal",
    tabs: tabData,
  },

  render: (args) => (
    <>
      <Title>Demo</Title>
      <Tabs {...args} />
    </>
  ),
};

export const ColorVariant: Story = {
  args: {
    variant: "warning",
    listVariant: "info",
    tabs: tabData,
  },

  render: (args) => (
    <>
      <Title>Color Variant</Title>
      <Tabs {...args} />
    </>
  ),
};

export const Disabled: Story = {
  args: {
    tabs: tabData,
    isDisabled: true,
  },

  render: (args) => (
    <>
      <Title>Disabled</Title>
      <Tabs {...args} />
    </>
  ),
};

export const DefaultSelected: Story = {
  args: {
    defaultSelectedKey: "Two",
    tabs: tabData,
  },

  render: (args) => (
    <>
      <Title>Default Selected</Title>
      <Tabs {...args} />
    </>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    tabs: tabDataWithIcon,
  },

  render: (args) => (
    <>
      <Title>Vertical</Title>
      <Tabs {...args} />
    </>
  ),
};

export const WithIcon: Story = {
  args: {
    tabs: tabDataWithIcon,
  },

  render: (args) => (
    <>
      <Title>With Icon</Title>
      <Tabs {...args} />
    </>
  ),
};
