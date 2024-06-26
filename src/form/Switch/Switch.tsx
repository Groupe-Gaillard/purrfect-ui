import React from "react";
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
  Label,
} from "react-aria-components";
import styled from "styled-components";
import { body1, sizing, theme } from "src/guidelines/theme";

const StyledSwitch = styled(AriaSwitch)<{ isDisabled?: boolean }>`
  &[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }

  display: flex;
  align-items: center;
  gap: ${sizing(10)};
  ${body1}
  forced-color-adjust: none;

  .indicator {
    width: ${sizing(32)};
    height: ${sizing(18)};
    border: 2px solid ${theme.color.gray};
    background: ${theme.color.primary100};
    border-radius: ${sizing(18)};
    transition: all 200ms;

    &:before {
      content: "";
      display: block;
      margin: ${sizing(2)};
      width: ${sizing(14)};
      height: ${sizing(14)};
      background: ${theme.color.primary};
      border-radius: ${sizing(16)};
      transition: all 200ms;
    }
  }

  &[data-pressed] .indicator {
    border-color: ${theme.color.gray};

    &:before {
      background: ${theme.color.primary100};
    }
  }

  &[data-selected] {
    .indicator {
      border-color: ${theme.color.primary100};
      background: ${theme.color.primary};

      &:before {
        background: ${theme.color.primary100};
        transform: translateX(100%);
      }
    }

    &[data-pressed] {
      .indicator {
        border-color: ${theme.color.gray200};
        background: ${theme.color.primary};
      }
    }
  }

  &[data-focus-visible] .indicator {
    outline: 2px solid ${theme.color.primary};
    outline-offset: ${sizing(2)};
  }
`;

const StyledLabel = styled(Label)`
  ${body1};
`;

type SwitchProps = {
  label?: string;
} & Pick<
  AriaSwitchProps,
  | "inputRef"
  | "defaultSelected"
  | "isSelected"
  | "value"
  | "isDisabled"
  | "name"
  | "className"
  | "autoFocus"
>;

const Switch = (props: SwitchProps) => {
  return (
    <StyledSwitch {...props}>
      <div className="indicator" />
      <StyledLabel>{props.label}</StyledLabel>
    </StyledSwitch>
  );
};

export default Switch;
