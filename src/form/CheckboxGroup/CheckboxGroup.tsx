import React from "react";
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  FieldError,
  Label,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import { body1, narrow, sizing, theme } from "src/guidelines/theme";

const StyledCheckboxGroup = styled(AriaCheckboxGroup)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${sizing(6)};
  color: ${theme.color.text.dark};

  &[data-disabled] > span {
    opacity: 0.5;
  }
`;

const StyledLabel = styled(Label)`
  ${body1}
`;

const StyledText = styled(Text)`
  ${narrow};
`;

const StyledIsRequired = styled.span`
  color: ${theme.color.danger};
`;

const StyledFieldError = styled(FieldError)`
  ${body1};
  width: 100%;
  color: ${theme.color.danger};
`;

type CheckboxGroupProps = AriaCheckboxGroupProps & {
  helperText?: string;
  label?: string;
  children: React.ReactNode;
};

const CheckboxGroup = (props: CheckboxGroupProps) => {
  return (
    <StyledCheckboxGroup {...props}>
      <StyledLabel>
        {props.label}
        {props.isRequired && <StyledIsRequired> *</StyledIsRequired>}
      </StyledLabel>
      {props.children}
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
    </StyledCheckboxGroup>
  );
};

export default CheckboxGroup;
export type { CheckboxGroupProps };
