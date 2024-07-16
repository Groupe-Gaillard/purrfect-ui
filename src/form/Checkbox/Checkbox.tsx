import React from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
  Label,
} from "react-aria-components";
import styled from "styled-components";
import { body1, breakpoints, sizing, theme } from "src/guidelines/theme";

const StyledCheckboxContainer = styled(AriaCheckbox)`
  display: flex;
  align-items: center;
  gap: ${sizing(6)};
  ${body1}
  forced-color-adjust: none;
  &[data-disabled] {
    opacity: 0.5;
  }

  @media ${breakpoints.minWidth.md} {
    gap: ${sizing(8)};
  }
`;

const StyledCheckbox = styled.div`
  width: ${sizing(14)};
  height: ${sizing(14)};
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

  @media ${breakpoints.minWidth.md} {
    width: ${sizing(16)};
    height: ${sizing(16)};
  }
`;

const StyledSvg = styled.svg`
  width: ${sizing(14)};
  height: ${sizing(14)};
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

  @media ${breakpoints.minWidth.md} {
    width: ${sizing(16)};
    height: ${sizing(16)};
  }
`;

const StyledLabel = styled(Label)`
  ${body1}

  [data-hovered] & {
    cursor: pointer;
  }
`;

type CheckboxProps = AriaCheckboxProps & {
  className?: string;
  label?: string;
};

const Checkbox = (props: CheckboxProps) => {
  return (
    <StyledCheckboxContainer {...props}>
      {({ isIndeterminate }) => (
        <>
          <StyledCheckbox>
            <StyledSvg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={15} height={3} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </StyledSvg>
          </StyledCheckbox>
          {props.label && <StyledLabel>{props.label}</StyledLabel>}
        </>
      )}
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
export type { CheckboxProps };
