import React from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
  Label,
} from "react-aria-components";
import styled from "styled-components";
import { sizing, theme } from "src/guidelines/theme";

const StyledCheckboxContainer = styled(AriaCheckbox)`
  display: flex;
  align-items: center;
  gap: ${sizing(9)};
  font-size: 1.143rem;
  color: ${theme.color.text.dark};
  forced-color-adjust: none;
  &[data-disabled] {
    opacity: 0.5;
  }
`;

const StyledCheckbox = styled.div`
  width: ${sizing(18)};
  height: ${sizing(18)};
  border: 2px solid ${theme.color.gray600};
  border-radius: ${sizing(4)};
  transition: all 200ms;
  display: flex;
  align-items: center;
  justify-content: center;

  [data-pressed] & {
    border-color: ${theme.color.gray200};
  }

  [data-focus-visible] & {
    outline: 2px solid ${theme.color.primary300};
    outline-offset: 2px;
  }

  [data-selected] &,
  [data-indeterminate] & {
    border-color: ${theme.color.primary};
    background: ${theme.color.primary};

    [data-pressed] & {
      border-color: ${theme.color.primary};
      background: ${theme.color.primary};
    }
  }
`;

const StyledSvg = styled.svg`
  width: 1rem;
  height: 1rem;
  fill: none;
  stroke: ${theme.color.gray100};
  stroke-width: 3px;
  stroke-dasharray: 22px;
  stroke-dashoffset: 66;
  transition: all 200ms;

  [data-selected] &,
  [data-indeterminate] & {
    stroke-dashoffset: 44;
  }

  [data-indeterminate] & {
    stroke: none;
    fill: ${theme.color.gray100};
  }

  [data-hovered] & {
    cursor: pointer;
  }
`;

const StyledLabel = styled(Label)`
  color: ${theme.color.text.dark};

  [data-hovered] & {
    cursor: pointer;
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
    <StyledCheckboxContainer {...props}>
      <StyledCheckbox>
        <StyledSvg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </StyledSvg>
      </StyledCheckbox>
      <StyledLabel>{props.label}</StyledLabel>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
