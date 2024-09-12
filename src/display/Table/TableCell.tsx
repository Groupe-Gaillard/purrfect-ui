import React from "react";
import { Cell, CellProps } from "react-aria-components";
import styled, { css } from "styled-components";
import { Alignment } from "src/display/Table/Table";
import { hadBorderLine, hadBorderRow } from "src/display/Table/addBorderTable";
import { sizing, theme } from "src/guidelines/theme";

const StyledCell = styled(Cell)<{
  hasBordersBetweenRow: boolean;
  hasBordersBetweenLine: boolean;
  borderColor: string;
  alignment?: Alignment;
}>`
  padding: ${sizing(4)} ${sizing(8)};
  text-align: left;
  outline: none;
  transform: translateZ(0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: ${({ alignment }) => alignment ?? "left"};
  ${({ hasBordersBetweenRow, hasBordersBetweenLine, borderColor }) => css`
    ${hadBorderRow(hasBordersBetweenRow, borderColor)}
    ${hadBorderLine(hasBordersBetweenLine, borderColor)}
  `}

  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: -2px;
  }
`;

type TableCellProps = CellProps & {
  borderColor: string;
  hasBordersBetweenRow: boolean;
  hasBordersBetweenLine: boolean;
  alignment?: Alignment;
};

const TableCell = (props: TableCellProps) => {
  return (
    <StyledCell
      {...props}
      hasBordersBetweenRow={props.hasBordersBetweenRow}
      hasBordersBetweenLine={props.hasBordersBetweenLine}
      borderColor={props.borderColor}
    >
      {props.children}
    </StyledCell>
  );
};

export default TableCell;
