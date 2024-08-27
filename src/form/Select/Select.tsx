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
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import Loader from "src/display/Loader/Loader";
import Input from "src/form/Input/Input";
import { sizing, theme } from "src/guidelines/theme";
import { body1, narrow } from "src/guidelines/theme/typographies";
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
  position: relative;
`;

const buttonWidth = sizing(26);

const StyledInput = styled(Input)`
  ${body1};
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  border-radius: ${theme.borderRadius.small};
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
  padding-right: ${buttonWidth};

  &[data-focused] {
    outline: ${sizing(2)} solid ${theme.color.primary};
  }

  &[data-invalid] {
    color: ${theme.color.danger};
    outline: ${sizing(2)} solid ${theme.color.danger};
  }
`;

const StyledLoader = styled(Loader)`
  position: absolute;
  top: ${sizing(5)};
  right: calc(${buttonWidth} + ${sizing(5)});
  z-index: 1;
`;

const StyledButton = styled(Button)`
  ${body1};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: ${buttonWidth};
  border-radius: ${theme.borderRadius.small};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid ${theme.color.gray200};
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
  width: var(--trigger-width);
  overflow: auto;
  border-radius: ${theme.borderRadius.small};
  border: 1px solid ${theme.color.gray200};
  background-color: ${theme.color.white};
  padding: ${theme.sizing(4, 0)};

  ${body1};

  & > * {
    padding: ${theme.sizing(0, 8)};
  }

  & > [data-selected] {
    ${body1};
    font-weight: ${theme.typographies.fontWeight.bold};
    background-color: ${theme.color.primary100};
  }

  & > [data-focused] {
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

export interface SelectProps<T extends object>
  extends Omit<ComboBoxProps<T>, "children"> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: React.ReactNode;
  widthSelect?: string;
  heightOptions?: string;
  placeholder?: string;
  leadingIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Select = <T extends object>({
  label,
  description,
  errorMessage,
  leadingIcon,
  isLoading,
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
        <StyledInput
          placeholder={props.placeholder ?? ""}
          leadingIcon={leadingIcon}
        />
        {isLoading && <StyledLoader size={16} variant="primary" />}

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

export const Option = ({ ...props }: ListBoxItemProps) => {
  return (
    <StyledListBoxItem
      {...props}
      className={({ isFocused, isSelected }) => {
        return `${isFocused ? "focused" : ""} ${isSelected ? "selected" : ""}`;
      }}
    />
  );
};
