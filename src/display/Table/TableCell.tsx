import React from "react";
import { Cell, CellProps } from "react-aria-components";
import styled from "styled-components";
import { sizing, theme } from "src/guidelines/theme";

const StyledCell = styled(Cell)`
  padding: ${sizing(4)} ${sizing(8)};
  text-align: left;
  outline: none;
  transform: translateZ(0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: -2px;
  }

  &:first-child {
    border-radius: ${theme.borderRadius.default} 0 0
      ${theme.borderRadius.default};
  }

  &:last-child {
    border-radius: 0 ${theme.borderRadius.default} ${theme.borderRadius.default}
      0;
  }
`;

const TableCell = (props: CellProps) => {
  return <StyledCell {...props}>{props.children}</StyledCell>;
};

export default TableCell;
