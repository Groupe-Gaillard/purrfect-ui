import React from "react";
import styled from "styled-components";
import Close from "src/icons/Close";
import { sizing } from "src/utils/utils";

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
`;

const IconWrapper = styled.div`
  height: ${sizing(25)};
  width: ${sizing(25)};
  margin-left: ${sizing(8)};
  & > svg {
    height: ${sizing(25)};
    width: ${sizing(25)};
  }
`;

const AlertCloseable = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <CloseButton onClick={() => onClose()}>
        <IconWrapper>
          <Close />
        </IconWrapper>
      </CloseButton>
    </>
  );
};

export default AlertCloseable;
