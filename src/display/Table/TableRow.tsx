import React from "react";
import {
  Collection,
  Row,
  RowProps,
  useTableOptions,
} from "react-aria-components";
import styled from "styled-components";
import Button from "src/action/Button/Button";
import TableCell from "src/display/Table/TableCell";
import Checkbox from "src/form/Checkbox/Checkbox";
import { sizing, theme } from "src/guidelines/theme";
import Drag from "src/icons/Drag";
import IconSVG from "src/icons/IconSVG";

const StyledRow = styled(Row)`
  clip-path: inset(0 round ${sizing(6)}); /* firefox */
  outline: none;
  cursor: default;
  position: relative;
  transform: scale(1);

  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: -2px;
  }

  &[data-pressed] {
    background: ${theme.color.gray100};
  }

  &[data-is-colored] {
    background-color: ${theme.color.info100};
  }

  &[data-selected] {
    border-radius: ${sizing(6)};
    background: ${theme.color.primary100};
    --focus-ring-color: ${theme.color.white};

    &[data-focus-visible],
    .react-aria-Cell[data-focus-visible] {
      outline-offset: -4px;
    }
  }
  &[data-disabled] {
    opacity: 0.5;
  }

  & > ${IconSVG} {
    height: ${sizing(12)};
    width: ${sizing(12)};
  }
`;

const TableRow = <T extends object>({
  columns,
  children,
  ...otherProps
}: RowProps<T>) => {
  const { selectionBehavior, allowsDragging } = useTableOptions();
  return (
    <StyledRow {...otherProps}>
      {allowsDragging && (
        <TableCell>
          <Button slot="drag" kind="link" size="small">
            <Drag />
          </Button>
        </TableCell>
      )}
      {selectionBehavior === "toggle" && (
        <TableCell>
          <Checkbox slot="selection" />
        </TableCell>
      )}
      <Collection items={columns}>{children}</Collection>
    </StyledRow>
  );
};

export default TableRow;
