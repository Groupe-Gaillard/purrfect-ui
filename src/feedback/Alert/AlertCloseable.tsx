import React from "react";
import { Divider } from "src/index";
import styled from "styled-components";

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

const StyledDivider = styled(Divider)`
    height: unset;
    align-self: stretch;
`;

const AlertCloseable = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <StyledDivider orientation={ "vertical" }></StyledDivider>
      <CloseButton onClick={ () => onClose() }>X</CloseButton>
    </>
  )
}

export default AlertCloseable
