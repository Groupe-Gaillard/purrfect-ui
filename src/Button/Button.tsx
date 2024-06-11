import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: pink;
`;

const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
