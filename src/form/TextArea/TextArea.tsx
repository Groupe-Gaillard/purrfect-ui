import React from "react";
import {
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
  FieldError,
  Label,
  Text,
  TextField,
  TextFieldProps,
} from "react-aria-components";
import styled from "styled-components";
import { breakpoints, sizing, theme } from "src/guidelines/theme";
import { body1, narrow } from "src/guidelines/theme/typographies";

const StyledTextField = styled(TextField)`
  display: flex;
  flex-direction: column;
  color: ${theme.color.text.dark};

  &,
  & > * {
    box-sizing: border-box;
  }

  &[data-disabled] {
    opacity: 0.5;
  }
`;

const StyledLabel = styled(Label)`
  ${body1}
`;

const StyledTextArea = styled(AriaTextArea)`
  ${body1};
  padding: ${sizing(4)};
  margin: 0;
  width: 100%;
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
    border-color: ${theme.color.danger};
  }

  @media ${breakpoints.minWidth.md} {
    padding: ${sizing(6)};
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
type TextAreaProps = { label?: string; helperText?: string } & Pick<
  TextFieldProps,
  | "autoFocus"
  | "className"
  | "defaultValue"
  | "id"
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
  | "value"
> &
  Pick<AriaTextAreaProps, "cols" | "placeholder" | "rows">;

const TextArea = (props: TextAreaProps) => {
  return (
    <StyledTextField {...props}>
      <StyledLabel>
        {props.label}
        {props.isRequired && <StyledIsRequired> *</StyledIsRequired>}
      </StyledLabel>
      <StyledTextArea
        cols={props.cols}
        placeholder={props.placeholder}
        rows={props.rows}
      />
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
    </StyledTextField>
  );
};

export default TextArea;
export type { TextAreaProps };
