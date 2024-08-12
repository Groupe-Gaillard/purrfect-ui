import React from "react";
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { breakpoints } from "src/guidelines/theme";
import { sizing } from "src/utils/utils";

const Container = styled.div`
  position: relative;
`;

const baseInputPadding = sizing(2);
const commonIconsCss = css`
  position: absolute;
  top: ${baseInputPadding};
  bottom: ${baseInputPadding};
  pointer-events: none;

  & > * {
    /* The actual icon (typically a <svg>) */
    height: 100%;
    width: auto;
  }
`;

const StyledLeadingIcon = styled.div`
  ${commonIconsCss};
  left: ${baseInputPadding};
`;

const StyledTrailingIcon = styled.div`
  ${commonIconsCss};
  right: ${baseInputPadding}};
`;

const baseMdInputPadding = sizing(3);
const iconSizing = sizing(22);

const StyledInput = styled(AriaInput)<{
  $hasLeadingIcon: boolean;
  $hasTrailingIcon: boolean;
}>`
  width: 100%;
  box-sizing: border-box;
  /* Leave place for the icons when needed */
  padding-left: ${({ $hasLeadingIcon }) =>
    $hasLeadingIcon
      ? `calc(${iconSizing} + ${baseInputPadding})`
      : baseInputPadding};
  padding-right: ${({ $hasTrailingIcon }) =>
    $hasTrailingIcon
      ? `calc(${iconSizing} + ${baseInputPadding})`
      : baseInputPadding};

  @media ${breakpoints.minWidth.md} {
    padding-left: ${({ $hasLeadingIcon }) =>
      $hasLeadingIcon
        ? `calc(${iconSizing} + ${baseMdInputPadding})`
        : baseMdInputPadding};
    padding-right: ${({ $hasTrailingIcon }) =>
      $hasTrailingIcon
        ? `calc(${iconSizing} + ${baseMdInputPadding})`
        : baseMdInputPadding};
  }
`;

export type InputProps = AriaInputProps & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
};

/** An Input with icons */
const Input = ({ leadingIcon, trailingIcon, ...inputProps }: InputProps) => {
  return (
    <Container>
      {leadingIcon && <StyledLeadingIcon>{leadingIcon}</StyledLeadingIcon>}

      <StyledInput
        {...inputProps}
        $hasLeadingIcon={!!leadingIcon}
        $hasTrailingIcon={!!trailingIcon}
      />

      {trailingIcon && <StyledTrailingIcon>{trailingIcon}</StyledTrailingIcon>}
    </Container>
  );
};

export default Input;
