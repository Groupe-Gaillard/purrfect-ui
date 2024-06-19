import React from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
} from "react-aria-components";
import styled from "styled-components";
import { theme } from "../../guidelines/theme/style";

const StyledCheckbox = styled(AriaCheckbox)`
  display: flex;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: ${theme.color.gray900};
  forced-color-adjust: none;

  .checkbox {
    width: 1.143rem;
    height: 1.143rem;
    border: 2px solid ${theme.color.gray200};
    border-radius: ${theme.borderRadius.small};
    transition: all 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: ${theme.color.gray100};
    stroke-width: 3px;
    stroke-dasharray: 22px;
    stroke-dashoffset: 66;
    transition: all 200ms;
  }

  &[data-pressed] .checkbox {
    border-color: ${theme.color.gray300};
  }

  &[data-focus-visible] .checkbox {
    outline: 2px solid ${theme.color.primary200};
    outline-offset: 2px;
  }

  &[data-selected],
  &[data-indeterminate] {
    .checkbox {
      border-color: ${theme.color.primary600};
      background: ${theme.color.primary600};
    }

    &[data-pressed] .checkbox {
      border-color: ${theme.color.primary400};
      background: ${theme.color.primary400};
    }

    svg {
      stroke-dashoffset: 44;
    }
  }

  &[data-indeterminate] {
    svg {
      stroke: none;
      fill: ${theme.color.gray100};
    }
  }
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
      {props.label}
    </StyledCheckbox>
  );
};

export default Checkbox;
