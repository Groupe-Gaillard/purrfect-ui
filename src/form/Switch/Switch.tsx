import React from "react";
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
  Label,
} from "react-aria-components";
import styled from "styled-components";
import { theme } from "../../guidelines/theme";

const backgroundColor = "#DADADA";
const indicatorColor = "#5B51D1";
const selectedBackgroundColor = "#5B51D1";
const selectedIndicatorColor = "#DADADA";
const borderColor = "#979797";

const StyledSwitch = styled(AriaSwitch)<{ isDisabled?: boolean }>`
  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}

  --background-color: ${backgroundColor};
  --indicator-color: ${indicatorColor};
  --selected-background-color: ${selectedBackgroundColor};
  --selected-indicator-color: ${selectedIndicatorColor};
  --border-color: ${borderColor};

  display: flex;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  .indicator {
    width: 2rem;
    height: 1.143rem;
    border: 2px solid var(--border-color);
    background: var(--background-color);
    border-radius: 1.143rem;
    transition: all 200ms;

    &:before {
      content: "";
      display: block;
      margin: 0.143rem;
      width: 0.857rem;
      height: 0.857rem;
      background: var(--indicator-color);
      border-radius: 16px;
      transition: all 200ms;
    }
  }

  &[data-pressed] .indicator {
    border-color: var(--border-color);

    &:before {
      background: var(--selected-indicator-color);
    }
  }

  &[data-selected] {
    .indicator {
      border-color: var(--selected-indicator-color);
      background: var(--selected-background-color);

      &:before {
        background: var(--background-color);
        transform: translateX(100%);
      }
    }

    &[data-pressed] {
      .indicator {
        border-color: var(--selected-indicator-color);
        background: var(--selected-background-color);
      }
    }
  }

  &[data-focus-visible] .indicator {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
`;

const StyledLabel = styled(Label)`
  color: ${theme.color.text.dark};
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
