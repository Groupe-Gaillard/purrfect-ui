import React from "react";
import {
  Table as AriaTable,
  TableProps as AriaTableProps,
  ColumnProps,
  ColumnResizer,
  ResizableTableContainer,
  RowProps,
  TableBody,
} from "react-aria-components";
import styled, { css } from "styled-components";
import TableCell from "src/display/Table/TableCell";
import TableColumn from "src/display/Table/TableColumn";
import TableHeader from "src/display/Table/TableHeader";
import TableRow from "src/display/Table/TableRow";
import { body1, theme } from "src/guidelines/theme";
import { sizing } from "src/utils/utils";

interface DataColumn extends ColumnProps {
  isResizable?: boolean;
  name: string;
  isVisible?: boolean;
}

export interface DataRows {
  isColored?: boolean;
}

export type TableProps<T> = {
  dataColumns: Array<DataColumn>;
  dataRows: Array<T & RowProps<T> & DataRows>;
  tableTitle: string;
  evenRowsBackgroundIsColored?: boolean;
} & AriaTableProps;

const StyledResizableTableContainer = styled(ResizableTableContainer)`
  width: 100%;
  overflow: auto;
  position: relative;
  border: 1px solid ${theme.color.gray100};
  border-radius: ${theme.borderRadius.default};
  background: ${theme.color.white};
`;

const StyledTable = styled(AriaTable)`
  ${body1};
  width: 100%;
  table-layout: initial !important;
  min-height: ${sizing(100)};
  padding: ${sizing(4)};
  outline: none;
  align-self: start;
  word-break: break-word;
  forced-color-adjust: none;
  border-spacing: 0;

  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: -1px;
  }
`;

const StyledTableBody = styled(TableBody)<{
  evenRowsBackgroundIsColored?: boolean;
}>`
  ${({ evenRowsBackgroundIsColored }) => css`
    & tr:nth-child(even) {
      background-color: ${evenRowsBackgroundIsColored && theme.color.gray100};

      &[data-selected] {
        background: ${evenRowsBackgroundIsColored && theme.color.primary200};
      }
    }
  `}
`;

const StyledColumnContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const StyledColumnResizer = styled(ColumnResizer)`
  position: absolute;
  top: ${sizing(-6)};
  right: ${sizing(-8)};
  width: ${sizing(6)};
  background-color: ${theme.color.gray};
  height: ${sizing(25)};
  flex: 0 0 auto;
  touch-action: none;
  box-sizing: border-box;
  border: ${sizing(2)};
  border-style: none solid;
  border-color: transparent;
  background-clip: content-box;
  z-index: 2;

  &[data-resizable-direction="both"] {
    cursor: ew-resize;
  }

  &[data-resizable-direction="left"] {
    cursor: e-resize;
  }

  &[data-resizable-direction="right"] {
    cursor: w-resize;
  }

  &[data-focus-visible] {
    background-color: ${theme.color.primary};
  }

  &[data-resizing] {
    border-color: ${theme.color.primary};
    background-color: transparent;
  }
`;

const Table = <T,>(props: TableProps<T>) => {
  return (
    <StyledResizableTableContainer>
      <StyledTable
        {...props}
        aria-label={props.tableTitle}
        selectionMode={props.selectionMode || "multiple"}
      >
        <TableHeader>
          {props.dataColumns.map(
            (column) =>
              column.isVisible && (
                <TableColumn
                  id={column.id}
                  key={column.id}
                  isRowHeader
                  allowsSorting={
                    props.onSortChange !== undefined ? true : false
                  }
                >
                  <StyledColumnContainer>
                    {column.name}
                    {column.isResizable && (
                      <StyledColumnResizer
                        aria-label={`Resize ${column.textValue}`}
                      />
                    )}
                  </StyledColumnContainer>
                </TableColumn>
              ),
          )}
        </TableHeader>
        <StyledTableBody
          items={props.dataRows}
          evenRowsBackgroundIsColored={props.evenRowsBackgroundIsColored}
        >
          {props.dataRows.map((row) => (
            <TableRow
              key={row.id}
              id={row.id}
              isDisabled={row.isDisabled}
              data-is-colored={row.isColored}
            >
              {props.dataColumns.map(
                (column) =>
                  column.isVisible && (
                    <TableCell key={column.id}>
                      {(row as Record<string, any>)[column.id ?? "name"]}
                    </TableCell>
                  ),
              )}
            </TableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </StyledResizableTableContainer>
  );
};

export default Table;
