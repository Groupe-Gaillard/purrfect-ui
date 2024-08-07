import React from "react";
import { Column as AriaColumn, ColumnProps } from "react-aria-components";
import styled, { css } from "styled-components";
import { hadBorderRow } from "src/display/Table/addBorderTable";
import { sizing, theme } from "src/guidelines/theme";
import SortDown from "src/icons/SortDown";
import SortUp from "src/icons/SortUp";

const StyledColumn = styled(AriaColumn)<{
  allowsSorting?: boolean;
  hasBordersBetweenRow: boolean;
  borderColor: string;
}>`
  padding: ${sizing(4)} ${sizing(8)};
  text-align: left;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ hasBordersBetweenRow, borderColor }) => css`
    ${hadBorderRow(hasBordersBetweenRow, borderColor)}
  `}

  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: -2px;
  }
  ${({ allowsSorting }) => css`
    & > * {
      display: ${allowsSorting && "inline-block"};
      vertical-align: ${allowsSorting && "middle"};
    }
  `}
`;

const StyledSortIndicator = styled.span`
  box-sizing: border-box;
  padding: 0 ${sizing(2)};

  & svg {
    padding-top: ${sizing(4)};
  }
`;

type TabelColumnProps = ColumnProps & {
  borderColor: string;
  hasBordersBetweenRow: boolean;
};
const TableColumn = (props: TabelColumnProps) => {
  return (
    <StyledColumn
      {...props}
      hasBordersBetweenRow={props.hasBordersBetweenRow}
      borderColor={props.borderColor}
    >
      {({ allowsSorting, sortDirection }) => (
        <>
          {allowsSorting && (
            <StyledSortIndicator aria-hidden="true">
              {sortDirection === "ascending" ? <SortUp /> : <SortDown />}
            </StyledSortIndicator>
          )}
          {props.children}
        </>
      )}
    </StyledColumn>
  );
};

export default TableColumn;
