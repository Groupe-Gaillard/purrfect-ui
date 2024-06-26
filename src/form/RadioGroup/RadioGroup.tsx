import React from "react";
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  FieldError,
  Label,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import { body1, sizing, theme } from "../../guidelines/theme";
import { typographies } from "../../guidelines/theme/typographies";
import Radio from "../Radio/Radio";
import type { RadioProps } from "../Radio/Radio";

const StyledLabel = styled(Label)`
  ${body1}
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

type RadioGroupProps = {
  helperText?: string;
  label?: string;
  radio: RadioProps[];
} & Pick<
  AriaRadioGroupProps,
  | "className"
  | "defaultValue"
  | "id"
  | "isDisabled"
  | "isInvalid"
  | "isReadOnly"
  | "isRequired"
  | "onChange"
  | "orientation"
  | "value"
>;

const RadioGroup = (props: RadioGroupProps) => {
  const StyledRadioGroup = styled(AriaRadioGroup)`
    display: flex;
    flex-direction: ${props.orientation === "horizontal" ? "row" : "column"};
    flex-wrap: wrap;
    gap: ${sizing(8)};
    color: ${theme.color.text.dark};
    &[data-disabled] {
      opacity: 0.5;
    }
  `;

  return (
    <StyledRadioGroup {...props}>
      <StyledLabel>
        {props.label}
        {props.isRequired && <StyledIsRequired> *</StyledIsRequired>}
      </StyledLabel>
      {props.radio.map((oneRadio, index) => (
        <Radio key={index} {...oneRadio} />
      ))}
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
    </StyledRadioGroup>
  );
};

export default RadioGroup;
