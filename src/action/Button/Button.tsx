import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({
  label,
  onClick,
  isDisabled = false,
}: {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <StyledButton onClick={onClick} disabled={isDisabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
