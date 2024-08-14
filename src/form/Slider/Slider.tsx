import React from "react";
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  Label,
  SliderOutput,
  SliderThumb,
  SliderThumbProps,
  SliderTrack,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { body1 } from "src/guidelines/theme/typographies";
import { breakpoints, sizing, theme } from "../../guidelines/theme";

type SliderProps = AriaSliderProps &
  SliderThumbProps & {
    label: string;
    sliderMaxWidth?: string;
  };

const StyledSlider = styled(AriaSlider)<{ sliderMaxWidth?: string }>`
  ${body1};
  display: grid;
  grid-template-areas:
    "label output"
    "track track";
  grid-template-columns: 1fr auto;

  &[data-disabled] {
    cursor: not-allowed;
  }

  ${({ sliderMaxWidth }) => css`
    max-width: ${sliderMaxWidth || "100%"};
  `}
`;
const StyledLabel = styled(Label)`
  grid-area: label;
  [data-disabled] & {
    ${body1};
    color: ${theme.color.text.light};
  }
`;
const StyledSliderOutput = styled(SliderOutput)`
  grid-area: output;
  [data-disabled] & {
    ${body1};
    color: ${theme.color.text.light};
  }
`;
const StyledSliderTrack = styled(SliderTrack)`
  grid-area: track;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    background: ${theme.color.gray200};
    [data-disabled] & {
      background: ${theme.color.gray100};
    }
  }
  height: ${sizing(24)};
  width: 100%;

  &:before {
    height: 3px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  &[data-hovered] {
    cursor: pointer;
  }

  @media ${breakpoints.minWidth.md} {
    height: ${sizing(30)};
  }
`;
const StyledSliderThumb = styled(SliderThumb)`
  width: ${sizing(20)};
  height: ${sizing(20)};
  border-radius: 50%;
  background: ${theme.color.primary};
  border: 2px solid ${theme.color.primary};
  forced-color-adjust: none;

  &[data-dragging] {
    background: ${theme.color.primary600};
  }
  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary400};
  }
  [data-disabled] & {
    border-color: ${theme.color.primary200};
    background: ${theme.color.primary200};
  }
  top: 50%;
  @media ${breakpoints.minWidth.md} {
    width: ${sizing(24)};
    height: ${sizing(24)};
  }
`;

const Slider = (props: SliderProps) => {
  return (
    <StyledSlider {...props}>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledSliderOutput />
      <StyledSliderTrack>
        <StyledSliderThumb autoFocus={props.autoFocus} name={props.name} />
      </StyledSliderTrack>
    </StyledSlider>
  );
};

export default Slider;
export type { SliderProps };
