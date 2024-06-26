import React from "react";
import { Separator, SeparatorProps } from "react-aria-components";
import styled from "styled-components";
import { sizing, theme } from "../../guidelines/theme";

type DividerProps = Pick<SeparatorProps, "orientation" | "className">;

const Divider = (props: DividerProps) => {
  const StyledSeparator = styled(Separator)`
    border: 0;
    background-color: ${theme.color.gray};
    width: ${props.orientation === "vertical" ? "1px" : "100%"};
    height: ${props.orientation === "vertical" ? "100%" : "1px"};
    margin: ${props.orientation === "vertical"
      ? `0 ${sizing(5)}`
      : `${sizing(5)} 0`};
  `;

  return (
    <>
      <StyledSeparator {...props} />
    </>
  );
};

export default Divider;
