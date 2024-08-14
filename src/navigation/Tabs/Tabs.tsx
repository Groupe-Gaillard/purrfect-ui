import React from "react";
import {
  Tabs as AriaTabs,
  TabsProps as AriaTabsProps,
  Tab,
  TabList,
  TabListProps,
  TabPanel,
  TabProps,
} from "react-aria-components";
import styled from "styled-components";
import { Variant } from "src/action/Button/Button";
import { sizing, theme } from "src/guidelines/theme";
import { body1 } from "src/guidelines/theme/typographies";

const StyledTabs = styled(AriaTabs)`
  display: flex;
  color: ${theme.color.text.dark};

  &[data-orientation="horizontal"] {
    flex-direction: column;
  }
`;

const StyledTab = styled(Tab)<{ variant?: Variant }>`
  ${body1}
  padding: ${sizing(10)};
  cursor: default;
  outline: none;
  border-bottom: 3px solid transparent;
  display: flex;
  gap: ${sizing(8)};

  &[data-hovered],
  &[data-focused] {
    opacity: 0.9;
  }

  &[data-selected] {
    border-bottom: 3px solid
      ${({ variant }) => theme.color[variant || "primary"]};
    color: ${({ variant }) => theme.color[variant || "primary"]};
  }

  &[data-disabled] {
    opacity: 0.5;
    border-bottom: 3px solid transparent;
  }

  &[data-focus-visible]:after {
    content: "";
    position: absolute;
    inset: ${sizing(4)};
    border-radius: ${theme.borderRadius.default};
    border: 2px solid ${({ variant }) => theme.color[variant || "primary"]};
  }

  & svg {
    height: ${sizing(18)};
    width: ${sizing(18)};
  }
`;

const StyledTabPanel = styled(TabPanel)<{ variant?: Variant }>`
  margin-top: ${sizing(4)};
  padding: ${sizing(10)};
  border-radius: ${theme.borderRadius.default};
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid ${({ variant }) => theme.color[variant || "primary"]};
  }
`;

const StyledTabList = styled(TabList)<{ listVariant?: Variant }>`
  display: flex;
  &[data-orientation="horizontal"] {
    border-bottom: 1px solid
      ${({ listVariant }) => theme.color[listVariant || "gray100"]};
  }
  &[data-orientation="vertical"] {
    flex-direction: column;
    padding-right: ${sizing(16)};
    border-right: 1px solid
      ${({ listVariant }) => theme.color[listVariant || "gray100"]};
  }
`;

type TabsProps = AriaTabsProps & {
  ariaLabel?: string;
  tabs: tabItem[];
  variant?: Variant;
  listVariant?: Variant;
  tabListProps?: TabListProps<string>;
  tabProps?: TabProps;
};

type tabItem = {
  id?: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
};

const Tabs = (props: TabsProps) => {
  return (
    <>
      <StyledTabs {...props}>
        <StyledTabList
          aria-label={props.ariaLabel}
          listVariant={props.listVariant}
          className={props.className as string}
        >
          {props.tabs.map((tab) => (
            <StyledTab
              key={tab.id}
              id={tab.id}
              variant={props.variant}
              className={tab.className as string}
            >
              {tab.leadingIcon && tab.leadingIcon}
              {tab.title}
              {tab.trailingIcon && tab.trailingIcon}
            </StyledTab>
          ))}
        </StyledTabList>
        {props.tabs.map((tab) => (
          <StyledTabPanel key={tab.id} id={tab.id}>
            {tab.children}
          </StyledTabPanel>
        ))}
      </StyledTabs>
    </>
  );
};

export default Tabs;
export type { TabsProps };
