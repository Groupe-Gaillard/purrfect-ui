import React from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
  Label,
} from "react-aria-components";
import styled from "styled-components";
import { theme } from "../../guidelines/theme";

const StyledCheckbox = styled(AriaCheckbox)`
  display: flex;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: #111111;
  forced-color-adjust: none;

  .checkbox {
    width: 1.143rem;
    height: 1.143rem;
    border: 2px solid #d2d2d2;
    border-radius: 4px;
    transition: all 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: #f0f0f0;
    stroke-width: 3px;
    stroke-dasharray: 22px;
    stroke-dashoffset: 66;
    transition: all 200ms;
  }

  &[data-pressed] .checkbox {
    border-color: #b5b5b5;
  }

  &[data-focus-visible] .checkbox {
    outline: 2px solid #b9b4eb;
    outline-offset: 2px;
  }

  &[data-selected],
  &[data-indeterminate] {
    .checkbox {
      border-color: #3b31b1;
      background: #3b31b1;
    }

    &[data-pressed] .checkbox {
      border-color: #5b51d1;
      background: #5b51d1;
    }

    svg {
      stroke-dashoffset: 44;
    }
  }

  &[data-indeterminate] {
    svg {
      stroke: none;
      fill: #f0f0f0;
    }
  }
`;

const StyledLabel = styled(Label)`
  color: ${theme.color.text.dark};
`;

type CheckboxProps = {
  className?: string;
  label?: string;
} & Pick<
  AriaCheckboxProps,
  "isDisabled" | "value" | "defaultSelected" | "onChange" | "isSelected"
>;

const Checkbox = (props: CheckboxProps) => {
  return (
    <StyledCheckbox {...props}>
      <div className="checkbox">
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      <StyledLabel>{props.label}</StyledLabel>
    </StyledCheckbox>
  );
};

export default Checkbox;
