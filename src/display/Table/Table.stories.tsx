import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Button from "src/action/Button/Button";
import { body1, heading1, sizing } from "src/guidelines/theme";
import Table from "./Table";
import TableDragForExample from "./TableDragForExample";
import TableSortingForExample from "./TableSortingForExample";

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const Text = styled.p`
  ${body1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const selectionModeArray = ["none", "single", "multiple"];

const dataColumns = [
  { id: "name", name: "Name", isVisible: true },
  { id: "type", name: "Type", isVisible: true },
  { id: "date", name: "Date Modified", isVisible: true },
  { id: "action", name: "Action", isVisible: true },
];

const dataColumnsResizable = [
  { id: "name", name: "Name", isVisible: true },
  { id: "type", name: "Type", isVisible: true, isResizable: true },
  { id: "date", name: "Date Modified", isVisible: true, isResizable: true },
  { id: "action", name: "Action", isVisible: true },
];

const dataColumnsNotVisible = [
  { id: "name", name: "Name", isVisible: true },
  { id: "type", name: "Type", isVisible: true },
  { id: "date", name: "Date Modified", isVisible: false },
  { id: "action", name: "Action", isVisible: true },
];

const dataRows = [
  {
    id: 1,
    name: "Games",
    date: "6/7/2020",
    type: "File folder",
    action: <Button>bonjour</Button>,
  },
  {
    id: 2,
    name: "Program Files",
    date: "4/7/2021",
    type: "File folder",
    action: <Button>bonjour</Button>,
  },
  {
    id: 3,
    name: "bootmgr",
    date: "11/20/2010",
    type: "System file",
    action: <Button>bonjour</Button>,
  },
  {
    id: 4,
    name: "log.txt",
    date: "1/18/2016",
    type: "Text Document",
    action: <Button>bonjour</Button>,
  },
];

const dataRowsOneIsDisabled = [
  {
    id: 1,
    name: "Games",
    date: "6/7/2020",
    type: "File folder",
    action: <Button>bonjour</Button>,
    isDisabled: true,
  },
  {
    id: 2,
    name: "Program Files",
    date: "4/7/2021",
    type: "File folder",
    action: <Button>bonjour</Button>,
  },
  {
    id: 3,
    name: "bootmgr",
    date: "11/20/2010",
    type: "System file",
    action: <Button>bonjour</Button>,
  },
  {
    id: 4,
    name: "log.txt",
    date: "1/18/2016",
    type: "Text Document",
    action: <Button>bonjour</Button>,
  },
];

const dataRowsOneIsColored = [
  {
    id: 1,
    name: "Games",
    date: "6/7/2020",
    type: "File folder",
    action: <Button>bonjour</Button>,
    isColored: true,
  },
  {
    id: 2,
    name: "Program Files",
    date: "4/7/2021",
    type: "File folder",
    action: <Button>bonjour</Button>,
  },
  {
    id: 3,
    name: "bootmgr",
    date: "11/20/2010",
    type: "System file",
    action: <Button>bonjour</Button>,
  },
  {
    id: 4,
    name: "log.txt",
    date: "1/18/2016",
    type: "Text Document",
    action: <Button>bonjour</Button>,
  },
];

export const tableBase: Story = {
  args: {
    dataColumns: dataColumns,
    dataRows: dataRows,
    tableTitle: "Table d'exemple",
    selectionMode: "multiple",
  },
  argTypes: {
    selectionMode: {
      options: selectionModeArray,
      mapping: { selectionModeArray },
      control: { type: "select" },
      description: "Chose one option",
    },
  },

  render: (args) => (
    <>
      <Title>Table</Title>
      <Table {...args} />
    </>
  ),
};

export const tableLinesDefaultSelected: Story = {
  args: {
    selectionMode: "multiple",
    defaultSelectedKeys: [2, 4],
    dataColumns: dataColumns,
    dataRows: dataRows,
  },

  render: (args) => (
    <>
      <Title>Table with lines selected by default</Title>
      <Table {...args} />
    </>
  ),
};

export const tableLinesNonSelectable: Story = {
  args: {
    selectionMode: "none",
    dataColumns: dataColumns,
    dataRows: dataRows,
  },

  render: (args) => (
    <>
      <Title>Table with lines not selectable</Title>
      <Table {...args} />
    </>
  ),
};

export const tableOnlyOneLineSelectable: Story = {
  args: {
    selectionMode: "single",
    dataColumns: dataColumns,
    dataRows: dataRows,
  },

  render: (args) => (
    <>
      <Title>Table with only one line selectable</Title>
      <Table {...args} />
    </>
  ),
};

export const tableOneLineDisabled: Story = {
  args: {
    selectionMode: "multiple",
    dataColumns: dataColumns,
    dataRows: dataRowsOneIsDisabled,
  },

  render: (args) => (
    <>
      <Title>Table with lines not selectable</Title>
      <Table {...args} />
    </>
  ),
};

export const tableColumnResizable: Story = {
  args: {
    selectionMode: "multiple",
    dataColumns: dataColumnsResizable,
    dataRows: dataRows,
  },

  render: (args) => (
    <>
      <Title>Table with columns resizable</Title>
      <Table {...args} />
    </>
  ),
};

export const tableEvenLinesBackgroundColored: Story = {
  args: {
    evenRowsBackgroundIsColored: true,
    dataColumns: dataColumns,
    dataRows: dataRows,
  },

  render: (args) => (
    <>
      <Title>Table with even lines background are colored</Title>
      <Table {...args} />
    </>
  ),
};

export const tableOneLineBackgroundColored: Story = {
  args: {
    dataColumns: dataColumns,
    dataRows: dataRowsOneIsColored,
  },

  render: (args) => (
    <>
      <Title>Table with one line background are colored</Title>
      <Table {...args} />
    </>
  ),
};

export const tableOneColumnIsNotVisible: Story = {
  args: {
    dataColumns: dataColumnsNotVisible,
    dataRows: dataRows,
  },

  render: (args) => (
    <>
      <Title>Table with one column is not visible</Title>
      <Text>
        In the dataColumns array the 3rd entry has &quot;isVisible: false&quot;
      </Text>
      <Table {...args} />
    </>
  ),
};

export const tableDragAndDropLines: Story = {
  render: () => (
    <>
      <Title>Table with Drag and Drop to reorder lines</Title>
      <TableDragForExample />
    </>
  ),
};

export const tableSortableLines: Story = {
  render: () => (
    <>
      <Title>Table with sortable lines</Title>
      <TableSortingForExample />
    </>
  ),
};
