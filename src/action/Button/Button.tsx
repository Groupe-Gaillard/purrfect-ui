import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
