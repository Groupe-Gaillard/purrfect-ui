import { css } from "styled-components";

export const hadBorderRow = (
  hasBordersBetweenRow: boolean = false,
  borderColor: string,
) => {
  if (hasBordersBetweenRow) {
    return css`
      border-right: 1px solid ${borderColor};
      &:last-child {
        border-right: 0;
      }
    `;
  }
  return;
};

export const hadBorderLine = (
  hasBordersBetweenLine: boolean = false,
  borderColor: string,
) => {
  if (hasBordersBetweenLine) {
    return css`
      border-bottom: 1px solid ${borderColor};
    `;
  }
  return;
};
