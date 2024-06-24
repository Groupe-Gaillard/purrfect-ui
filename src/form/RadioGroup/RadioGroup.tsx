import React from "react";
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps as AriaRadioProps,
  FieldError,
  Label,
  Radio,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import { body1, sizing, theme } from "../../guidelines/theme";
import { typographies } from "../../guidelines/theme/typographies";

const StyledLabel = styled(Label)`
  ${body1}
`;

const StyledRadio = styled(Radio)`
  ${body1}
  display: flex;
  align-items: center;
  gap: ${sizing(8)};
  forced-color-adjust: none;

  &:before {
    content: "";
    display: block;
    width: ${sizing(18)};
    height: ${sizing(18)};
    box-sizing: border-box;
    border: ${sizing(2)} solid ${theme.color.gray600};
    background: ${theme.color.white};
    border-radius: ${theme.borderRadius.round};
    transition: all 200ms;
  }

  &[data-pressed]:before {
    border-color: ${theme.color.gray200};
  }

  &[data-hovered] {
    cursor: pointer;
  }

  &[data-selected] {
    &:before {
      border-color: ${theme.color.primary};
      border-width: ${sizing(7)};
    }

    &[data-pressed]:before {
      border-color: ${theme.color.primary};
    }
  }

  &[data-focus-visible]:before {
    outline: ${sizing(2)} solid ${theme.color.primary};
    outline-offset: 2px;
  }

  &[data-invalid] {
    &:before {
      border-color: ${theme.color.danger};
    }

    &[data-pressed]:before {
      border-color: ${theme.color.danger300};
    }
  }

  &[data-disabled] {
    opacity: 0.5;
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

type RadioProps = {
  label: string;
} & Pick<AriaRadioProps, "id" | "value" | "isDisabled">;

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
        <StyledRadio
          key={index}
          id={oneRadio.id}
          value={oneRadio.value}
          isDisabled={oneRadio.isDisabled}
        >
          {oneRadio.label}
        </StyledRadio>
      ))}
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
    </StyledRadioGroup>
  );
};

export default RadioGroup;
