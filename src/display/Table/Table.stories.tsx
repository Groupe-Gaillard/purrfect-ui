import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import Button from "src/action/Button/Button";
import Table, { DataColumn } from "src/display/Table/Table";
import TableDragForExample from "src/display/Table/TableDragForExample";
import TableSortingForExample from "src/display/Table/TableSortingForExample";
import { sizing, theme } from "src/guidelines/theme";
import { body1 } from "src/guidelines/theme/typographies";
import { Title } from "src/utils/StorybookComponents/Titles";

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

const Text = styled.p`
  ${body1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;

const selectionModeArray = ["none", "single", "multiple"];

const dataColumns: DataColumn[] = [
  { id: "name", name: "Name", alignment: "right" },
  { id: "type", name: "Type", alignment: "left" },
  { id: "date", name: "Date Modified", alignment: "center" },
  { id: "action", name: "Action" },
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

const dataRowsOneDisabled = [
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

export const tableOneLineDisabled: Story = {
  args: {
    selectionMode: "multiple",
    dataColumns: dataColumns,
    dataRows: dataRowsOneDisabled,
  },

  render: (args) => (
    <>
      <Title>Table with lines not selectable</Title>
      <Table {...args} />
    </>
  ),
};

const dataColumnsResizable = [
  { id: "name", name: "Name" },
  { id: "type", name: "Type", isResizable: true },
  { id: "date", name: "Date Modified", isResizable: true },
  { id: "action", name: "Action" },
];

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

const dataRowsOneColored = [
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

export const tableOneLineBackgroundColored: Story = {
  args: {
    dataColumns: dataColumns,
    dataRows: dataRowsOneColored,
  },

  render: (args) => (
    <>
      <Title>Table with one line background are colored</Title>
      <Table {...args} />
    </>
  ),
};

const dataColumnsNotVisible = [
  { id: "name", name: "Name" },
  { id: "type", name: "Type" },
  { id: "date", name: "Date Modified", isHidden: true },
  { id: "action", name: "Action" },
];

export const tableOneColumnIsNotVisible: Story = {
  args: {
    dataColumns: dataColumnsNotVisible,
    dataRows: dataRows,
  },

  render: (args) => (
    <>
      <Title>Table with one column is not visible</Title>
      <Text>
        In the dataColumns array the 3rd entry has &quot;isHidden: true&quot;
      </Text>
      <Table {...args} />
    </>
  ),
};

export const tableWithBorders: Story = {
  args: {
    dataColumns: dataColumns,
    dataRows: dataRows,
    hasBordersBetweenRow: true,
    hasBordersBetweenLine: true,
    borderColor: theme.color.primary200,
  },

  render: (args) => (
    <>
      <Title>Table with borders inside</Title>
      <Text>
        In the Table you can choose if you want border line or/and border row,
        and you can choose the color
      </Text>
      <Table {...args} />
    </>
  ),
};

const dataColumnsAlignment: DataColumn[] = [
  { id: "name", name: "Align right", alignment: "right" },
  { id: "type", name: "Align left", alignment: "left" },
  { id: "date", name: "Align center", alignment: "center" },
  { id: "action", name: "Default" },
];

export const tableColumnsAlignment: Story = {
  args: {
    selectionMode: "multiple",
    dataColumns: dataColumnsAlignment,
    dataRows: dataRows,
    hasBordersBetweenRow: true,
    borderColor: theme.color.primary200,
  },

  render: (args) => (
    <>
      <Title>Table with specific column alignment</Title>
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
