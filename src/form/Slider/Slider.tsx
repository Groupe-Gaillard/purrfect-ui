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
import styled from "styled-components";
import { body1, theme } from "src/guidelines/theme";

type SliderProps = {
  label: string;
  sliderMaxWidth?: string;
} & Pick<
  AriaSliderProps,
  | "className"
  | "defaultValue"
  | "formatOptions"
  | "id"
  | "isDisabled"
  | "minValue"
  | "maxValue"
  | "onChange"
  | "onChangeEnd"
  | "step"
  | "value"
> &
  Pick<SliderThumbProps, "autoFocus" | "name">;

const Slider = (props: SliderProps) => {
  const StyledSlider = styled(AriaSlider)`
    display: grid;
    grid-template-areas:
      "label output"
      "track track";
    grid-template-columns: 1fr auto;
    color: ${theme.color.text.dark};
    max-width: ${props.sliderMaxWidth || "100%"};
    &[data-disabled] {
      cursor: not-allowed;
    }
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
    height: 30px;
    width: 100%;

    &:before {
      height: 3px;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  `;
  const StyledSliderThumb = styled(SliderThumb)`
    width: 1.429rem;
    height: 1.429rem;
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
  `;

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
