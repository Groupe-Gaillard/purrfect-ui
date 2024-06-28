import React from "react";
import {
  Button as AriaButton,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  FieldError,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxProps,
  Popover,
  SelectValue,
  Text,
} from "react-aria-components";
import styled from "styled-components";
import { sizing, theme } from "../../guidelines/theme";
import { body1, typographies } from "../../guidelines/theme/typographies";

const StyledSelect = styled(AriaSelect)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${body1}

  &[data-disabled] {
    opacity: 0.5;
  }
`;

const StyledLabel = styled(Label)`
  ${body1}
`;

const StyledButton = styled(AriaButton)`
  border: 1px solid ${theme.color.gray200};
  border-radius: ${theme.borderRadius.default};
  background: ${theme.color.white};
  box-shadow: 0 1px 2px rgba(0 0 0 / 0.1);
  font-size: ${typographies.fontSize.md};
  padding: ${sizing(4)} ${sizing(4)} ${sizing(4)} ${sizing(9)};
  display: flex;
  align-items: center;
  min-width: 250px;
  cursor: pointer;

  &[data-focus-visible] {
    outline: 2px solid ${theme.color.primary};
    outline-offset: -1px;
  }

  [data-invalid] & {
    color: ${theme.color.danger};
    border-color: ${theme.color.danger};
  }
`;

const StyledSelectValue = styled(SelectValue)`
  &[data-placeholder] {
    font-style: italic;
    color: var(--text-color-placeholder);
  }
  [slot="description"] {
    display: none;
  }
`;

const StyledIcon = styled.span`
  width: ${sizing(24)};
  line-height: ${typographies.lineHeight.base};
  margin-left: auto;
  padding: ${sizing(1)};
  background: ${theme.color.primary};
  color: ${theme.color.text.light};
  forced-color-adjust: none;
  border-radius: ${theme.borderRadius.small};
  font-size: ${sizing(14)};
`;

const StyledPopover = styled(Popover)`
  min-width: 250px;
  border: 1px solid ${theme.color.gray200};
  border-radius: ${theme.borderRadius.default};
  background: ${theme.color.white};
`;

const StyledListBox = styled(ListBox)`
  display: block;
  width: unset;
  max-height: inherit;
  min-height: unset;
  border: none;

  .react-aria-Header {
    padding-left: ${sizing(24)};
  }
`;

const StyledListBoxItem = styled(ListBoxItem)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${sizing(4)} ${sizing(9)} ${sizing(4)} ${sizing(25)};

  &[data-focus-visible] {
    outline: none;
  }

  &[data-selected] {
    font-weight: ${typographies.fontWeight.medium};
    background: unset;
    color: ${theme.color.text.dark};

    &::before {
      content: "✓";
      content: "✓" / "";
      alt: " ";
      position: absolute;
      top: 4px;
      left: 4px;
    }
  }

  &[data-focused],
  &[data-pressed] {
    background: ${theme.color.primary200};
    color: ${theme.color.text.dark};
  }

  &[data-disabled] {
    opacity: 0.5;
  }
`;

const StyledText = styled(Text)`
  ${body1};
`;

const StyledOptionLabel = styled(Text)`
  ${body1};
`;

const StyledOptionDescription = styled(Text)`
  ${body1};
  font-size: ${typographies.fontSize.sm};
  font-weight: ${typographies.fontWeight.light};
`;

const StyledIsRequired = styled.span`
  color: ${theme.color.danger};
`;

const StyledFieldError = styled(FieldError)`
  ${body1};
  color: ${theme.color.danger};
`;

export type OptionProps = {
  label: string;
  description?: string;
} & Pick<ListBoxItemProps, "id" | "value" | "isDisabled">;

type SelectProps = {
  label?: string;
  helperText?: string;
  options: OptionProps[];
  selected?: string;
  setSelected?: ((keys: Selection) => void) | undefined;
} & Pick<
  AriaSelectProps<{ key: string }>,
  | "autoFocus"
  | "className"
  | "defaultOpen"
  | "defaultSelectedKey"
  | "isDisabled"
  | "isInvalid"
  | "isRequired"
  | "name"
  | "onSelectionChange"
  | "placeholder"
  | "selectedKey"
> &
  Pick<
    ListBoxProps<HTMLElement>,
    "selectionMode" | "selectedKeys" | "onSelectionChange"
  >;

const Select = (props: SelectProps) => {
  return (
    <StyledSelect {...props}>
      <StyledLabel>
        {props.label}
        {props.isRequired && <StyledIsRequired> *</StyledIsRequired>}
      </StyledLabel>
      <StyledButton>
        <StyledSelectValue />
        <StyledIcon aria-hidden="true">▼</StyledIcon>
      </StyledButton>
      <StyledText slot="description">{props.helperText}</StyledText>
      <StyledFieldError />
      <StyledPopover>
        <StyledListBox
          selectionMode={props.selectionMode}
          selectedKeys={props.selected}
          onSelectionChange={props.setSelected}
        >
          {props.options.map((oneOption, index) => (
            <StyledListBoxItem
              key={index}
              id={oneOption.id}
              isDisabled={oneOption.isDisabled}
              value={oneOption.value}
            >
              <StyledOptionLabel slot="label">
                {oneOption.label}
              </StyledOptionLabel>
              <StyledOptionDescription slot="description">
                {oneOption.description}
              </StyledOptionDescription>
            </StyledListBoxItem>
          ))}
        </StyledListBox>
      </StyledPopover>
    </StyledSelect>
  );
};

export default Select;
