import React from "react";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  FieldError,
  Label,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import { sizing, theme } from "src/guidelines/theme";
import { body1, narrow } from "src/guidelines/theme/typographies";
import Input, { InputProps } from "../Input/Input";

const StyledTextField = styled(AriaTextField)`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${theme.color.text.dark};

  &[data-disabled] {
    opacity: 0.5;
  }
`;

const StyledLabel = styled(Label)`
  ${body1}
`;

const StyledInput = styled(Input)`
  ${body1};
  margin: 0;
  border: 1px solid ${theme.color.gray200};
  border-radius: ${theme.borderRadius.default};
  background: ${theme.color.white};
  font-size: ${theme.typographies.fontSize.base};
  color: ${theme.color.text.dark};

  &[data-focused] {
    outline: ${sizing(2)} solid ${theme.color.primary};
    outline-offset: -1px;
  }

  &[data-invalid] {
    color: ${theme.color.danger};
    outline: ${sizing(2)} solid ${theme.color.danger};
    outline-offset: -1px;
  }
`;

const StyledText = styled(Text)`
  ${narrow};
`;

const StyledIsRequired = styled.span`
  color: ${theme.color.danger};
`;

const StyledFieldError = styled(FieldError)`
  ${body1};
  color: ${theme.color.danger};
`;

type TextFieldProps = {
  label?: string;
  helperText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
} & Pick<
  AriaTextFieldProps,
  | "autoFocus"
  | "className"
  | "defaultValue"
  | "id"
  | "inputMode"
  | "isDisabled"
  | "isInvalid"
  | "isReadOnly"
  | "isRequired"
  | "maxLength"
  | "minLength"
  | "name"
  | "onBlur"
  | "onChange"
  | "onFocus"
  | "pattern"
  | "type"
  | "value"
> &
  Pick<InputProps, "placeholder">;

const TextField = (props: TextFieldProps) => {
  return (
    <StyledTextField {...props}>
      <StyledLabel>
        {props.label}
        {props.isRequired && <StyledIsRequired> *</StyledIsRequired>}
      </StyledLabel>
      <StyledInput
        placeholder={props.placeholder}
        leadingIcon={props.leadingIcon}
        trailingIcon={props.trailingIcon}
      />
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
    </StyledTextField>
  );
};

export default TextField;
export type { TextFieldProps };
