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
import { body1, narrow, sizing, theme } from "src/guidelines/theme";
import ChevronDown from "src/icons/ChevronDown";

const StyledComboBox = styled(ComboBox)<{ widthSelect?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &[data-disabled] {
    opacity: 0.5;
  }

  & .pui-select-group {
    width: ${({ widthSelect }) => widthSelect ?? "100%"};
  }
`;

const StyledLabel = styled(Label)`
  ${body1};
`;

const StyledIsRequired = styled.span`
  color: ${theme.color.danger};
`;

const StyledGroup = styled(Group)`
  ${body1};
  display: grid;
  grid-template-columns: 1fr auto;
`;

const StyledInput = styled(Input)`
  ${body1};
  flex: 1;
  text-align: left;
  border-radius: ${theme.borderRadius.small};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};

  &[data-invalid] {
    color: ${theme.color.danger};
    border-color: ${theme.color.danger};
  }
`;

const StyledButton = styled(Button)`
  ${body1};
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  border-radius: ${theme.borderRadius.small};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid ${theme.color.gray200};
  border-left: 0;
  background-color: ${theme.color.white};
`;

const StyledText = styled(Text)`
  ${narrow};
`;

const StyledFieldError = styled(FieldError)`
  ${body1};
  color: ${theme.color.danger};
`;

const StyledPopover = styled(Popover)``;

const StyledListBox = styled(ListBox)`
  max-width: 90vw;
  overflow: auto;
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

const StyledListBoxItem = styled(ListBoxItem)`
  padding-bottom: ${sizing(6)};
`;

interface SelectProps<T extends object>
  extends Omit<ComboBoxProps<T>, "children"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: React.ReactNode;
  widthSelect?: string;
  heightOptions?: string;
  placeholder?: string;
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
      <StyledLabel>
        {label}
        {props.isRequired && <StyledIsRequired> *</StyledIsRequired>}
      </StyledLabel>
      <StyledGroup className="pui-select-group">
        <StyledInput placeholder={props.placeholder ?? ""} />
        <StyledButton>
          <ChevronDown />
        </StyledButton>
      </StyledGroup>
      {description && <StyledText slot="description">{description}</StyledText>}
      <StyledFieldError>{errorMessage}</StyledFieldError>
      <StyledPopover>
        <StyledListBox style={{ maxHeight: props.heightOptions ?? "auto" }}>
          {children}
        </StyledListBox>
      </StyledPopover>
    </StyledComboBox>
  );
};

const Option = ({ ...props }: ListBoxItemProps) => {
  return (
    <StyledListBoxItem
      {...props}
      className={({ isFocused, isSelected }) => {
        return `${isFocused ? "focused" : ""} ${isSelected ? "selected" : ""}`;
      }}
    />
  );
};

export default Select;
export { Option };
