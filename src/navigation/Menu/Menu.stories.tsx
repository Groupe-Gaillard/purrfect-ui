import type { Meta, StoryObj } from "@storybook/react";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Divider from "src/display/Divider/Divider";
import { sizing } from "src/guidelines/theme";
import { body1, heading2 } from "src/guidelines/theme/typographies";
import AddIcon from "src/icons/Add";
import Close from "src/icons/Close";
import Default from "src/icons/Default";
import DeleteIcon from "src/icons/Delete";
import Drag from "src/icons/Drag";
import FilesIcon from "src/icons/Files";
import SortDown from "src/icons/SortDown";
import UploadIcon from "src/icons/Upload";
import Menu from "src/navigation/Menu/Menu";
import MenuButton from "src/navigation/Menu/MenuButton";

const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

const Title = styled.h1`
  ${heading2};
  margin: ${sizing(24, 0, 16)};
`;

const Text = styled.p`
  ${body1};
  margin: ${sizing(24, 0, 16)};
`;

const Container = styled.section`
  height: 100vh;
  /* max-width: 300px; */
`;

const MenuButtonDisplay = ({
  label,
  icon,
  isDisabled,
}: {
  label: string;
  icon?: ReactElement;
  isDisabled?: boolean;
}) => {
  return (
    <MenuButton
      radius="none"
      kind="normal"
      block
      align="left"
      textStyle="normal"
      size="small"
      leadingIcon={icon}
      variant="dark"
      onPress={() => alert(`${label}`)}
      isDisabled={isDisabled}
    >
      {label}
    </MenuButton>
  );
};

const menuItems = [
  {
    id: 91,
    name: "Menu top",
    value: [
      {
        id: 1,
        value: <MenuButtonDisplay label="Open" icon={<Default />} />,
      },
      {
        id: 2,
        value: <MenuButtonDisplay label="Add" icon={<AddIcon />} />,
      },
    ],
  },
  {
    id: 92,
    name: "Menu bottom",
    value: [
      {
        id: 3,
        value: <MenuButtonDisplay label="Close" icon={<Close />} />,
      },
      {
        id: 5,
        value: <MenuButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
      {
        id: 6,
        value: <MenuButtonDisplay label="Move" icon={<Drag />} />,
      },
      {
        id: 7,
        value: <MenuButtonDisplay label="Print" icon={<FilesIcon />} />,
      },
      {
        id: 8,
        value: (
          <MenuButton
            radius="none"
            kind="normal"
            block
            align="left"
            textStyle="normal"
            size="small"
            leadingIcon={<UploadIcon />}
            variant="dark"
          >
            Change
          </MenuButton>
        ),
        children: [
          { id: 100, value: <MenuButtonDisplay label="Crop" /> },
          { id: 101, value: <MenuButtonDisplay label="Cut" /> },
          { id: 102, value: <MenuButtonDisplay label="Copy" /> },
        ],
      },
      {
        id: 9,
        value: (
          <MenuButton
            radius="none"
            kind="normal"
            block
            align="left"
            textStyle="normal"
            size="small"
            leadingIcon={<SortDown />}
            variant="dark"
          >
            Files
          </MenuButton>
        ),
        children: [
          { id: 100, value: <MenuButtonDisplay label="Compress" /> },
          { id: 101, value: <MenuButtonDisplay label="Extract" /> },
          {
            id: 103,
            value: <MenuButtonDisplay label="Store" />,
            children: [
              { id: 1000, value: <MenuButtonDisplay label="Backup" /> },
              { id: 1001, value: <MenuButtonDisplay label="Restore" /> },
              { id: 1002, value: <MenuButtonDisplay label="Control" /> },
            ],
          },
        ],
      },
    ],
  },
];

const simpleMenuItems = [
  {
    id: 191,
    value: [
      {
        id: 1,
        value: <MenuButtonDisplay label="Open" icon={<Default />} />,
      },
      {
        id: 2,
        value: <MenuButtonDisplay label="Add" icon={<AddIcon />} />,
      },
      {
        id: 3,
        value: <MenuButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
];

const doubleMenuItems = [
  {
    id: 291,
    value: [
      {
        id: 1,
        value: <MenuButtonDisplay label="Open" icon={<Default />} />,
      },
      {
        id: 2,
        value: <MenuButtonDisplay label="Add" icon={<AddIcon />} />,
      },
      {
        id: 3,
        value: <MenuButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
  {
    id: 91,
    value: [
      {
        id: 4,
        value: <MenuButtonDisplay label="Print" icon={<FilesIcon />} />,
      },
      {
        id: 5,
        value: <MenuButtonDisplay label="Move" icon={<Drag />} />,
      },
      {
        id: 6,
        value: <MenuButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
];

const doubleMenuTitleItems = [
  {
    id: 391,
    name: "Top",
    value: [
      {
        id: 1,
        value: <MenuButtonDisplay label="Open" icon={<Default />} />,
      },
      {
        id: 2,
        value: <MenuButtonDisplay label="Add" icon={<AddIcon />} />,
      },
      {
        id: 3,
        value: <MenuButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
  {
    id: 91,
    name: "End",
    value: [
      {
        id: 4,
        value: <MenuButtonDisplay label="Print" icon={<FilesIcon />} />,
      },
      {
        id: 5,
        value: <MenuButtonDisplay label="Move" icon={<Drag />} />,
      },
      {
        id: 6,
        value: <MenuButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
];

const doubleMenuSepratorItems = [
  {
    id: 491,
    value: [
      {
        id: 1,
        value: <MenuButtonDisplay label="Open" icon={<Default />} />,
      },
      {
        id: 2,
        value: <MenuButtonDisplay label="Add" icon={<AddIcon />} />,
      },
      {
        id: 3,
        value: <MenuButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
    ],
  },
  {
    id: 91,
    value: [
      {
        id: 4,
        value: <MenuButtonDisplay label="Print" icon={<FilesIcon />} />,
      },
      {
        id: 5,
        value: <MenuButtonDisplay label="Move" icon={<Drag />} />,
      },
      {
        id: 6,
        value: <Divider />,
      },
      {
        id: 7,
        value: <MenuButtonDisplay label="Upload file" icon={<UploadIcon />} />,
      },
      {
        id: 8,
        value: <MenuButtonDisplay label="Sort it" icon={<SortDown />} />,
      },
    ],
  },
];

const menuItemsIsDisabled = [
  {
    id: 91,
    name: "Menu top",
    value: [
      {
        id: 1,
        value: <MenuButtonDisplay label="Open" icon={<Default />} />,
      },
      {
        id: 2,
        value: <MenuButtonDisplay label="Add" isDisabled icon={<AddIcon />} />,
        isDisabled: true,
      },
    ],
  },
  {
    id: 92,
    name: "Menu bottom",
    value: [
      {
        id: 3,
        value: <MenuButtonDisplay label="Close" icon={<Close />} />,
      },
      {
        id: 5,
        value: <MenuButtonDisplay label="Delete" icon={<DeleteIcon />} />,
      },
      {
        id: 6,
        value: <MenuButtonDisplay label="Move" icon={<Drag />} />,
      },
      {
        id: 7,
        value: <MenuButtonDisplay label="Print" icon={<FilesIcon />} />,
      },
      {
        id: 8,
        value: (
          <MenuButton
            radius="none"
            kind="normal"
            block
            align="left"
            textStyle="normal"
            size="small"
            leadingIcon={<UploadIcon />}
            variant="dark"
            isDisabled
          >
            Change
          </MenuButton>
        ),
        isDisabled: true,
        children: [
          { id: 100, value: <MenuButtonDisplay label="Crop" /> },
          { id: 101, value: <MenuButtonDisplay label="Cut" /> },
          { id: 102, value: <MenuButtonDisplay label="Copy" /> },
        ],
      },
      {
        id: 9,
        value: (
          <MenuButton
            radius="none"
            kind="normal"
            block
            align="left"
            textStyle="normal"
            size="small"
            leadingIcon={<SortDown />}
            variant="dark"
          >
            Files
          </MenuButton>
        ),
        children: [
          { id: 100, value: <MenuButtonDisplay label="Compress" /> },
          { id: 101, value: <MenuButtonDisplay label="Extract" /> },
          {
            id: 103,
            value: <MenuButtonDisplay label="Store" />,
            children: [
              { id: 1000, value: <MenuButtonDisplay label="Backup" /> },
              { id: 1001, value: <MenuButtonDisplay label="Restore" /> },
              { id: 1002, value: <MenuButtonDisplay label="Control" /> },
            ],
          },
        ],
      },
    ],
  },
];

export const menuBase: Story = {
  args: {
    menuItems: menuItems,
    widthOpened: 300,
  },

  render: (args) => (
    <>
      <Title>Menu</Title>
      <Container>
        <Menu {...args} />
      </Container>
    </>
  ),
};

export const simpleMenu: Story = {
  args: {
    menuItems: simpleMenuItems,
    widthOpened: 300,
  },

  render: (args) => (
    <>
      <Title>Simple menu</Title>
      <Container>
        <Menu {...args} />
      </Container>
    </>
  ),
};

export const doubleMenu: Story = {
  args: {
    menuItems: doubleMenuItems,
    widthOpened: 300,
  },

  render: (args) => (
    <>
      <Title>Menu with 2 sections</Title>
      <Container>
        <Menu {...args} />
      </Container>
    </>
  ),
};

export const doubleMenuTitle: Story = {
  args: {
    menuItems: doubleMenuTitleItems,
    widthOpened: 300,
  },

  render: (args) => (
    <>
      <Title>Menu with 2 sections and title for each</Title>
      <Container>
        <Menu {...args} />
      </Container>
    </>
  ),
};

export const doubleMenuSeparator: Story = {
  args: {
    menuItems: doubleMenuSepratorItems,
    widthOpened: 300,
  },

  render: (args) => (
    <>
      <Title>Menu with 2 sections and separator in one section</Title>
      <Container>
        <Menu {...args} />
      </Container>
    </>
  ),
};

export const menuIsDisabled: Story = {
  args: {
    menuItems: menuItemsIsDisabled,
    widthOpened: 300,
  },

  render: (args) => (
    <>
      <Title>Menu with items are disabled</Title>
      <Text>
        isDisabled allow to disable the container of one element, not the
        element itself (like a button). <br />
        The menu item &quot;Add&quot; is disabled but we have to disable the
        button Add too,
        <br />
        the menu item Change is disabled and you can&apos;t go inside, because
        the sub menu is a menu feature
      </Text>
      <Container>
        <Menu {...args} />
      </Container>
    </>
  ),
};
