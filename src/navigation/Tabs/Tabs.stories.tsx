import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Link from "src/action/Link/Link";
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
    content: "Content of Tab One",
    title: "Title of One",
    className: "tab-1",
  },
  {
    id: "Two",
    content: <Link href="#">Content of Tab Two</Link>,
    title: "Title of Two",
    className: "tab-2",
  },
  {
    id: "Three",
    content: <p>Content of tab three</p>,
    title: "Title of Three",
    className: "tab-3",
  },
];

const tabDataWithIcon = [
  {
    id: "One",
    content: "Content of Tab One",
    title: "Title of One",
    leadingIcon: <FilesIcon />,
  },
  {
    id: "Two",
    content: <Link href="#">Content of Tab Two</Link>,
    title: "Title of Two",
    trailingIcon: <FilesIcon />,
  },
  {
    id: "Three",
    content: <p>Content of tab three</p>,
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
