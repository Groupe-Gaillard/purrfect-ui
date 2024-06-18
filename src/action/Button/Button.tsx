import React from "react";
import styled from "styled-components";
import { sizing, theme } from "../../guidelines/theme";

const StyledButton = styled.button`
  padding: ${sizing(6)} ${sizing(12)};
  border: none;
  border-radius: ${theme.borderRadius.default};
  cursor: pointer;
  &:hover:enabled {
    background-color: ${theme.color.gray200};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(StyledButton)`
  color: ${theme.color.text.white};
  background-color: ${theme.color.primary};
  &:hover:enabled {
    background-color: ${theme.color.primary600};
  }
`;

const SuccessButton = styled(StyledButton)`
  color: ${theme.color.text.white};
  background-color: ${theme.color.success};
  &:hover:enabled {
    background-color: ${theme.color.success600};
  }
`;

const DangerButton = styled(StyledButton)`
  color: ${theme.color.text.white};
  background-color: ${theme.color.danger};
  &:hover:enabled {
    background-color: ${theme.color.danger600};
  }
`;

const WarningButton = styled(StyledButton)`
  color: ${theme.color.text.white};
  background-color: ${theme.color.warning};
  &:hover:enabled {
    background-color: ${theme.color.warning600};
  }
`;

const InfoButton = styled(StyledButton)`
  color: ${theme.color.text.white};
  background-color: ${theme.color.info};
  &:hover:enabled {
    background-color: ${theme.color.info};
  }
`;

const GrayButton = styled(StyledButton)`
  color: ${theme.color.text.white};
  background-color: ${theme.color.gray};
  &:hover:enabled {
    background-color: ${theme.color.gray600};
  }
`;

const DefaultButton = styled(StyledButton)`
  color: ${theme.color.text.dark};
  background-color: ${theme.color.gray100};
  &:hover:enabled {
    background-color: ${theme.color.primary600};
  }
`;

const Button = ({
  label,
  onClick,
  isDisabled = false,
  bgColor,
}: {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  bgColor?: string;
}) => {
  switch (bgColor) {
    case "primary":
      return (
        <PrimaryButton onClick={onClick} disabled={isDisabled}>
          {label}
        </PrimaryButton>
      );
      break;
    case "success":
      return (
        <SuccessButton onClick={onClick} disabled={isDisabled}>
          {label}
        </SuccessButton>
      );
      break;
    case "danger":
      return (
        <DangerButton onClick={onClick} disabled={isDisabled}>
          {label}
        </DangerButton>
      );
      break;
    case "warning":
      return (
        <WarningButton onClick={onClick} disabled={isDisabled}>
          {label}
        </WarningButton>
      );
      break;
    case "info":
      return (
        <InfoButton onClick={onClick} disabled={isDisabled}>
          {label}
        </InfoButton>
      );
      break;
    case "gray":
      return (
        <GrayButton onClick={onClick} disabled={isDisabled}>
          {label}
        </GrayButton>
      );
      break;
    default:
      return (
        <DefaultButton onClick={onClick} disabled={isDisabled}>
          {label}
        </DefaultButton>
      );
  }
};

export default Button;
