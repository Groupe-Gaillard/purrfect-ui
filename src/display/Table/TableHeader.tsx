import React from "react";
import {
  TableHeader as AriaTableHeader,
  Collection,
  TableHeaderProps,
  useTableOptions,
} from "react-aria-components";
import styled from "styled-components";
import TableColumn from "src/display/Table/TableColumn";
import Checkbox from "src/form/Checkbox/Checkbox";
import { sizing, theme } from "src/guidelines/theme";

const StyledTableHeader = styled(AriaTableHeader)`
  font-size: ${theme.typographies.fontSize.sm};
  text-align: left;

  &:after {
    content: "";
    display: table-row;
    height: 2px;
  }

  & tr:last-child th {
    border-bottom: 1px solid ${theme.color.gray100};
    cursor: default;
  }
`;

const StyledTableColumn = styled(TableColumn)`
  width: ${sizing(25)} !important;
`;

const TableHeader = <T extends object>({
  columns,
  children,
}: TableHeaderProps<T>) => {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();

  return (
    <StyledTableHeader>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <StyledTableColumn />}
      {selectionBehavior === "toggle" && (
        <StyledTableColumn width={25}>
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </StyledTableColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </StyledTableHeader>
  );
};

export default TableHeader;
