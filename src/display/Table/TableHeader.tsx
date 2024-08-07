import React from "react";
import {
  TableHeader as AriaTableHeader,
  TableHeaderProps as AriaTableHeaderProps,
  Collection,
  useTableOptions,
} from "react-aria-components";
import styled from "styled-components";
import TableColumn from "src/display/Table/TableColumn";
import Checkbox from "src/form/Checkbox/Checkbox";
import { sizing, theme } from "src/guidelines/theme";

const StyledTableHeader = styled(AriaTableHeader)<{ borderColor: string }>`
  font-size: ${theme.typographies.fontSize.sm};
  text-align: left;

  &:after {
    content: "";
    display: table-row;
    height: 2px;
  }

  & tr:last-child th {
    border-bottom: 1px solid ${({ borderColor }) => borderColor};
    cursor: default;
  }
`;

const StyledTableColumn = styled(TableColumn)`
  width: ${sizing(25)} !important;
`;

type TableHeaderProps<T> = AriaTableHeaderProps<T> & {
  borderColor: string;
  hasBordersBetweenRow: boolean;
  hasBordersBetweenLine: boolean;
};

const TableHeader = <T extends object>({
  columns,
  children,
  ...otherProps
}: TableHeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();

  return (
    <StyledTableHeader borderColor={otherProps.borderColor}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && (
        <StyledTableColumn
          borderColor={otherProps.borderColor}
          hasBordersBetweenRow={otherProps.hasBordersBetweenRow}
        />
      )}
      {selectionBehavior === "toggle" && (
        <StyledTableColumn
          width={25}
          borderColor={otherProps.borderColor}
          hasBordersBetweenRow={otherProps.hasBordersBetweenRow}
        >
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </StyledTableColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </StyledTableHeader>
  );
};

export default TableHeader;
