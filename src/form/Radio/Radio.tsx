import React from "react";
import {
  Radio as AriaRadio,
  RadioProps as AriaRadioProps,
} from "react-aria-components";
import styled from "styled-components";
import { body1, sizing, theme } from "src/guidelines/theme";

const StyledRadio = styled(AriaRadio)`
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

export type RadioProps = {
  label: string;
} & Pick<AriaRadioProps, "id" | "value" | "isDisabled" | "className">;

const Radio = (props: RadioProps) => {
  return <StyledRadio {...props}>{props.label}</StyledRadio>;
};

export default Radio;
