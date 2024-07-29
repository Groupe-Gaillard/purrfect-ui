import React from "react";
import {
  DatePicker as AriaDatePicker,
  DatePickerProps as AriaDatePickerProps,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  DateValue,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import Button from "src/action/Button/Button";
import { body1, narrow, sizing, theme } from "src/guidelines/theme";
import Close from "src/icons/Close";

const StyledDatePicker = styled(AriaDatePicker)`
  display: flex;
  flex-direction: column;
  ${body1}

  &[data-disabled] {
    opacity: 0.5;
  }
`;

const StyledGroup = styled(Group)`
  display: flex;
  width: fit-content;
  align-items: center;
`;

const StyledDateInput = styled(DateInput)`
  display: flex;
  width: fit-content;
  min-width: ${sizing(150)};
  padding: ${sizing(4)};
  white-space: nowrap;
  forced-color-adjust: none;
  border-radius: ${theme.borderRadius.small};
  border: 1px solid ${theme.color.gray200};
  background: ${theme.color.white};

  &[data-focus-within] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: -1px;
  }

  &[data-invalid] {
    color: ${theme.color.danger};
    border-color: ${theme.color.danger};
  }
`;

const StyledDateSegment = styled(DateSegment)`
  padding: 0 ${sizing(2)};
  font-variant-numeric: tabular-nums;
  text-align: end;
  color: ${theme.color.text.dark};
  cursor: pointer;

  &[data-type="literal"] {
    padding: 0;
  }

  &[data-placeholder] {
    color: ${theme.color.gray};
    font-style: italic;
  }

  &:focus {
    color: ${theme.color.text.white};
    background: ${theme.color.primary300};
    outline: none;
    border-radius: ${theme.borderRadius.small};
    caret-color: transparent;
  }
`;

const StyledLabel = styled(Label)`
  ${body1}
`;

const StyledButton = styled(Button)`
  forced-color-adjust: none;
  border-radius: ${theme.borderRadius.small};
  border: none;
  margin-left: ${sizing(-26)};
  width: ${sizing(23)};
  height: ${sizing(23)};
  padding: 0;
  cursor: pointer;

  &[data-pressed] {
    box-shadow: none;
    background: ${theme.color.primary};
  }

  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: 2px;
  }
`;

const StyledPopover = styled(Popover)`
  max-width: unset;
`;

const StyledCalendar = styled(Calendar)`
  width: fit-content;
  max-width: 100%;
  ${body1}
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 0 ${sizing(4)} ${sizing(8)} ${sizing(4)};
`;

const StyledHeading = styled(Heading)`
  flex: 1;
  margin: 0;
  text-align: center;
  font-size: ${theme.typographies.fontSize.lg};
`;

const StyledButtonCalendar = styled(Button)`
  width: ${sizing(32)};
  height: ${sizing(32)};
  padding: 0;
  cursor: pointer;
`;

const StyledCalendarCell = styled(CalendarCell)`
  width: ${sizing(26)};
  line-height: ${sizing(30)};
  text-align: center;
  border-radius: ${theme.borderRadius.default};
  cursor: default;
  outline: none;
  margin: ${sizing(1)};
  forced-color-adjust: none;

  &[data-outside-month] {
    display: none;
  }

  &[data-pressed] {
    background: ${theme.color.gray100};
  }

  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: 2px;
  }

  &[data-hovered] {
    background-color: ${theme.color.gray100};
    cursor: pointer;
  }

  &[data-selected] {
    background: ${theme.color.primary100};
    color: ${theme.color.text.dark};
  }
  &[data-disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const StyledDialog = styled(Dialog)`
  position: relative;
  outline: none;
  padding: ${sizing(30)};
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
  border: 1px solid ${theme.color.gray100};
  border-radius: ${theme.borderRadius.small};
  background-color: ${theme.color.white};
`;

const StyledButtonClose = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 ${sizing(6)};
`;

const StyledText = styled(Text)`
  ${narrow};
`;

const StyledIsRequired = styled.span`
  color: ${theme.color.danger};
`;

const StyledFieldError = styled(FieldError)`
  ${body1};
  color: ${theme.color.danger};
`;

type DatePickerProps = AriaDatePickerProps<DateValue> & {
  label?: string;
  helperText?: string;
};

const DatePicker = (props: DatePickerProps) => {
  return (
    <>
      <StyledDatePicker {...props}>
        <StyledLabel>
          {props.label}
          {props.isRequired && <StyledIsRequired> *</StyledIsRequired>}
        </StyledLabel>
        <StyledGroup>
          <StyledDateInput>
            {(segment) => <StyledDateSegment segment={segment} />}
          </StyledDateInput>
          <StyledButton leadingIcon="▼" />
        </StyledGroup>
        <StyledPopover>
          <StyledDialog>
            {({ close }) => (
              <>
                <StyledButtonClose onPress={close} kind="link">
                  <Close />
                </StyledButtonClose>
                <StyledCalendar>
                  <StyledHeader>
                    <StyledButtonCalendar
                      slot="previous"
                      leadingIcon="◀"
                      size="small"
                    />
                    <StyledHeading />
                    <StyledButtonCalendar
                      slot="next"
                      trailingIcon="▶"
                      size="small"
                    />
                  </StyledHeader>
                  <CalendarGrid>
                    {(date) => <StyledCalendarCell date={date} />}
                  </CalendarGrid>
                </StyledCalendar>
              </>
            )}
          </StyledDialog>
        </StyledPopover>
        <StyledText slot="description">{props.helperText}</StyledText>
        <StyledFieldError />
      </StyledDatePicker>
    </>
  );
};

export default DatePicker;
export type { DatePickerProps };
