import React from "react";
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  FieldError,
  Label,
  Text,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { body1, sizing, theme } from "src/guidelines/theme";
import { typographies } from "src/guidelines/theme/typographies";

const StyledLabel = styled(Label)`
  ${body1}
`;

const StyledText = styled(Text)`
  ${body1};
  width: 100%;
  font-size: ${typographies.fontSize.sm};
`;

const StyledIsRequired = styled.span`
  color: ${theme.color.danger};
`;

const StyledFieldError = styled(FieldError)`
  ${body1};
  width: 100%;
  color: ${theme.color.danger};
`;

type Orientation = "horizontal" | "vertical";
const StyledRadioGroup = styled(AriaRadioGroup)<{ orientation?: Orientation }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${sizing(8)};
  color: ${theme.color.text.dark};
  &[data-disabled] {
    opacity: 0.5;
  }
  ${({ orientation }) => css`
    flex-direction: ${orientation === "horizontal" ? "row" : "column"};
  `}
`;

type RadioGroupProps = AriaRadioGroupProps & {
  helperText?: string;
  label?: string;
  children: React.ReactNode;
};

const RadioGroup = (props: RadioGroupProps) => {
  return (
    <StyledRadioGroup {...props}>
      <StyledLabel>
        {props.label}
        {props.isRequired && <StyledIsRequired> *</StyledIsRequired>}
      </StyledLabel>
      {props.children}
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
    </StyledRadioGroup>
  );
};

export default RadioGroup;
export type { RadioGroupProps };
