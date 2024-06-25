import React from "react";
import type {
  ComboBoxProps,
  ListBoxItemProps,
  ValidationResult,
} from "react-aria-components";
import {
  Button,
  ComboBox,
  FieldError,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import { body1, theme } from "src/guidelines/theme";

const StyledComboBox = styled(ComboBox)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const StyledLabel = styled(Label)`
  ${body1};
`;

const StyledGroup = styled(Group)`
  width: 100%;
  ${body1};
  display: grid;
  grid-template-columns: 1fr auto;
`;

const StyledInput = styled(Input)`
  ${body1};
  border-radius: ${theme.borderRadius.small};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
`;

const StyledButton = styled(Button)`
  ${body1};
  display: flex;
  justify-content: stretch;
  align-items: center;
  border-radius: ${theme.borderRadius.small};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid ${theme.color.gray200};
  border-left: 0;
  background-color: ${theme.color.white};
`;

const StyledText = styled(Text)`
  ${body1};
  font-size: ${theme.typographies.fontSize.sm};
`;

const StyledFieldError = styled(FieldError)`
  ${body1};
`;

const StyledPopover = styled(Popover)``;

const StyledListBox = styled(ListBox)`
  width: var(--trigger-width);
  border-radius: ${theme.borderRadius.small};
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
  padding: ${theme.sizing(4, 0)};

  ${body1};

  & > * {
    padding: ${theme.sizing(0, 8)};
  }

  & > .selected {
    ${body1};
    font-weight: ${theme.typographies.fontWeight.bold};
    background-color: ${theme.color.primary100};
  }

  & > .focused {
    background-color: ${theme.color.primary200};
  }

  & > [data-disabled="true"] {
    background-color: ${theme.color.gray100};
    color: ${theme.color.gray};
  }
`;

interface SelectProps<T extends object>
  extends Omit<ComboBoxProps<T>, "children"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: React.ReactNode;
}

const Select = <T extends object>({
  label,
  description,
  errorMessage,
  children,
  ...props
}: SelectProps<T>) => {
  return (
    <StyledComboBox {...props}>
      <StyledLabel>{label}</StyledLabel>
      <StyledGroup>
        <StyledInput />
        <StyledButton>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="16px"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </StyledButton>
      </StyledGroup>
      {description && <StyledText slot="description">{description}</StyledText>}
      <StyledFieldError>{errorMessage}</StyledFieldError>
      <StyledPopover>
        <StyledListBox>{children}</StyledListBox>
      </StyledPopover>
    </StyledComboBox>
  );
};

const Option = ({ ...props }: ListBoxItemProps) => {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) => {
        return `${isFocused ? "focused" : ""} ${isSelected ? "selected" : ""}`;
      }}
    />
  );
};

export default Select;
export { Option };
