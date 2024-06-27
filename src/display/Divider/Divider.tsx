import React from "react";
import { Separator, SeparatorProps } from "react-aria-components";
import styled, { css } from "styled-components";
import { sizing, theme } from "src/guidelines/theme";

type DividerProps = Pick<SeparatorProps, "orientation" | "className">;
type Orientation = "horizontal" | "vertical";

const StyledSeparator = styled(Separator)<{ orientation?: Orientation }>`
  border: 0;
  background-color: ${theme.color.gray};
  ${({ orientation }) => css`
    width: ${orientation === "vertical" ? "1px" : "100%"};
    height: ${orientation === "vertical" ? "100%" : "1px"};
    margin: ${orientation === "vertical" ? `0 ${sizing(5)}` : `${sizing(5)} 0`};
  `}
`;
const Divider = (props: DividerProps) => {
  return <StyledSeparator {...props} />;
};

export default Divider;
export type { DividerProps };
