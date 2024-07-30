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
import styled, { css } from "styled-components";
import { breakpoints, sizing, theme } from "src/guidelines/theme";
import { body1, narrow } from "src/guidelines/theme/typographies";

const StyledTextField = styled(AriaTextField)`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${theme.color.text.dark};
  position: relative;

  &[data-disabled] {
    opacity: 0.5;
  }
`;

const StyledLabel = styled(Label)`
  ${body1}
`;

const iconSizing = 20;

const StyledInput = styled(Input)<{
  $hasLeadingIcon?: boolean;
  $hasTrailingIcon?: boolean;
}>`
  ${body1};
  padding-left: ${({ $hasLeadingIcon }) =>
    sizing(4 + ($hasLeadingIcon ? iconSizing : 0))};
  padding-right: ${({ $hasTrailingIcon }) =>
    sizing(4 + ($hasTrailingIcon ? iconSizing : 0))};
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
    border-color: ${theme.color.danger};
  }

  @media ${breakpoints.minWidth.md} {
    padding-left: ${({ $hasLeadingIcon }) =>
      sizing(6 + ($hasLeadingIcon ? iconSizing + 4 : 0))};
    padding-right: ${({ $hasTrailingIcon }) =>
      sizing(6 + ($hasTrailingIcon ? iconSizing + 4 : 0))};
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

const commonIconsCss = css`
  width: ${sizing(iconSizing)};
  height: ${sizing(iconSizing)};
  position: absolute;
  top: ${sizing(iconSizing + 5)};
  pointer-events: none;

  & > svg {
    height: ${sizing(iconSizing)};
    width: ${sizing(iconSizing)};
  }
`;

const StyledLeadingIcon = styled.div`
  ${commonIconsCss};
  left: ${sizing(4)};
`;

const StyledTrailingIcon = styled.div`
  ${commonIconsCss};
  right: ${sizing(4)};
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
      {props.leadingIcon && (
        <StyledLeadingIcon>{props.leadingIcon}</StyledLeadingIcon>
      )}
      <StyledInput
        placeholder={props.placeholder}
        $hasLeadingIcon={!!props.leadingIcon}
        $hasTrailingIcon={!!props.trailingIcon}
      />
      {props.trailingIcon && (
        <StyledTrailingIcon>{props.trailingIcon}</StyledTrailingIcon>
      )}
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
    </StyledTextField>
  );
};

export default TextField;
export type { TextFieldProps };
