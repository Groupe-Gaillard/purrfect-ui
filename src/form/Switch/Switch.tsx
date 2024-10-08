import React from "react";
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
  Label,
} from "react-aria-components";
import styled from "styled-components";
import { breakpoints, sizing, theme } from "src/guidelines/theme";
import { body1 } from "src/guidelines/theme/typographies";

const StyledSwitch = styled(AriaSwitch)<{ isDisabled?: boolean }>`
  &[data-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;
  }

  display: flex;
  align-items: center;
  gap: ${sizing(6)};
  ${body1}
  forced-color-adjust: none;

  .indicator {
    width: ${sizing(26)};
    height: ${sizing(16)};
    border: 2px solid ${theme.color.gray};
    background: ${theme.color.primary100};
    border-radius: ${sizing(18)};
    transition: all 200ms;

    &:before {
      content: "";
      display: block;
      margin: ${sizing(2)};
      width: ${sizing(12)};
      height: ${sizing(12)};
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

  &[data-hovered] {
    cursor: pointer;
  }

  @media ${breakpoints.minWidth.md} {
    gap: ${sizing(8)};

    .indicator {
      width: ${sizing(32)};
      height: ${sizing(18)};

      &:before {
        width: ${sizing(14)};
        height: ${sizing(14)};
      }
    }
  }
`;

const StyledLabel = styled(Label)`
  ${body1};

  [data-hovered] & {
    cursor: pointer;
  }
`;

type SwitchProps = AriaSwitchProps & {
  label?: string;
};

const Switch = (props: SwitchProps) => {
  return (
    <StyledSwitch {...props}>
      <div className="indicator" />
      <StyledLabel>{props.label}</StyledLabel>
    </StyledSwitch>
  );
};

export default Switch;
export type { SwitchProps };
