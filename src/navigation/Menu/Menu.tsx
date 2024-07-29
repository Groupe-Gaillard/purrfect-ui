import React from "react";
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuItemProps as AriaMenuItemProps,
  MenuProps as AriaMenuProps,
  Header,
  MenuTrigger,
  OverlayArrow,
  Popover,
  Section,
  SubmenuTrigger,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { body1, theme } from "src/guidelines/theme";
import Caret from "src/icons/Caret";
import ChevronRight from "src/icons/ChevronRight";
import IconSVG from "src/icons/IconSVG";
import { sizing } from "src/utils/utils";

export type MyMenuItemProps = AriaMenuItemProps & {
  id?: number;
  name?: string;
  value?: object;
  children?: Array<MyMenuItemProps>;
  subItems?: Array<MyMenuItemProps>;
};

export type MenuProps<T> = AriaMenuProps<T> & {
  menuItems: Array<{
    id?: number;
    name?: string;
    value?: Array<object>;
  }>;
  widthOpened?: number;
  backgnnroundColor?: string;
};

const StyledMenu = styled(AriaMenu)<{
  widthOpened?: number;
  backgroundColor?: string;
}>`
  box-sizing: border-box;
  box-shadow: ${theme.shadows.navigation};
  height: 100%;

  ${({ widthOpened }) => css`
    width: ${widthOpened ? sizing(widthOpened) : "100%"};
  `}

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor ?? theme.color.white};
  `}
`;

const StyledSection = styled(Section)`
  ${body1};
  padding: ${sizing(4, 0)};

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.color.gray};
  }
`;

const StyledHeader = styled(Header)`
  font-size: ${theme.typographies.fontSize.sm};
  color: ${theme.color.gray};
  padding: ${sizing(8, 8, 0)};
`;

const StyledChildrenMenu = styled(AriaMenu)``;

const StyledMenuItem = styled(AriaMenuItem)`
  --icon-size: ${sizing(12)};

  position: relative;
  ${body1};

  &[data-focused] {
    background: transparent;
    color: inherit;
  }

  &[data-has-submenu] > button {
    padding-right: ${sizing(36)};
  }

  & > *:not([role="separator"]) {
    padding-left: ${sizing(8)};
  }
  & > [role="separator"] {
    margin: ${sizing(0, 8)};
    width: calc(100% - ${sizing(16)});
  }
  &[data-disabled] {
    opacity: 0.5;
    > * {
      cursor: not-allowed;
    }
  }

  & > ${IconSVG} {
    position: absolute;
    top: calc((100% - var(--icon-size)) / 2);
    right: var(--icon-size);
    height: var(--icon-size);
    width: var(--icon-size);
  }
`;

const StyledPopover = styled(Popover)<{
  backgroundColor?: string;
}>`
  box-shadow: ${theme.shadows.navigation};
  border-radius: ${theme.borderRadius.small};
  outline: none;
  max-width: ${sizing(250)};

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor ?? theme.color.white};
  `}

  .react-aria-OverlayArrow svg {
    display: block;
    ${({ backgroundColor }) => css`
      fill: ${backgroundColor ?? theme.color.white};
    `}
    stroke: ${theme.color.gray100};
    stroke-width: 1px;
  }

  &[data-placement="bottom"] {
    --origin: translateY(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-top: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement="right"] {
    --origin: translateX(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-left: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement="left"] {
    --origin: translateX(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-right: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  &[data-entering] {
    animation: popover-slide 200ms;
  }

  &[data-exiting] {
    animation: popover-slide 200ms reverse ease-in;
  }

  @keyframes popover-slide {
    from {
      transform: var(--origin);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const MenuItem = (props: MyMenuItemProps) => {
  const { subItems } = props;
  return (
    subItems &&
    Object.keys(subItems).map((oneItem: string) => {
      const menuOneItem: MyMenuItemProps = subItems[Number(oneItem)];

      if (menuOneItem.children === undefined || menuOneItem.children === null) {
        return (
          <StyledMenuItem
            {...props}
            isDisabled={menuOneItem.isDisabled}
            key={menuOneItem.id}
          >
            <>{menuOneItem.value}</>
          </StyledMenuItem>
        );
      } else {
        return (
          <SubmenuTrigger key={menuOneItem.id}>
            <StyledMenuItem isDisabled={menuOneItem.isDisabled}>
              <>
                {menuOneItem.value}
                <ChevronRight />
              </>
            </StyledMenuItem>
            <StyledPopover>
              <OverlayArrow>
                <Caret />
              </OverlayArrow>
              <StyledChildrenMenu>
                <MenuItem subItems={menuOneItem.children} />
              </StyledChildrenMenu>
            </StyledPopover>
          </SubmenuTrigger>
        );
      }
    })
  );
};

const Menu = (props: MenuProps<JSX.Element>) => {
  return (
    <MenuTrigger>
      <StyledMenu {...props}>
        {props.menuItems.map((item) => (
          <StyledSection key={item.id}>
            {item.name && <StyledHeader>{item.name}</StyledHeader>}
            {item.value && <MenuItem subItems={item.value} />}
          </StyledSection>
        ))}
      </StyledMenu>
    </MenuTrigger>
  );
};

export default Menu;
