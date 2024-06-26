import React from "react";
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  FieldError,
  Input,
  InputProps,
  Label,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import { sizing, theme } from "src/guidelines/theme";
import { body1, typographies } from "src/guidelines/theme/typographies";

const StyledTextField = styled(AriaTextField)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: ${theme.color.text.dark};
  &[data-disabled] {
    opacity: 0.5;
  }
`;

const StyledLabel = styled(Label)`
  ${body1}
`;

const StyledInput = styled(Input)`
  padding: ${sizing(6)};
  margin: 0;
  border: 1px solid ${theme.color.gray200};
  border-radius: ${theme.borderRadius.default};
  background: ${theme.color.white};
  font-size: ${typographies.fontSize.base};
  color: ${theme.color.text.dark};

  &[data-focused] {
    outline: ${sizing(2)} solid ${theme.color.primary};
    outline-offset: -1px;
  }
  &[data-invalid] {
    color: ${theme.color.danger};
    border-color: ${theme.color.danger};
  }
`;

const StyledText = styled(Text)`
  ${body1};
  font-size: ${typographies.fontSize.sm};
`;

const StyledIsRequired = styled.span`
  color: ${theme.color.danger};
`;

const StyledFieldError = styled(FieldError)`
  ${body1};
  color: ${theme.color.danger};
`;

type TextFieldProps = { label?: string; helperText?: string } & Pick<
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
      <StyledInput placeholder={props.placeholder} />
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
    </StyledTextField>
  );
};

export default TextField;
export type { TextFieldProps };
