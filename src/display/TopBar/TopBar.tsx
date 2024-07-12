import {
  AriaToolbarProps as AriaTopBarProps,
  useToolbar,
} from "@react-aria/toolbar";
import React, { useRef } from "react";
import styled from "styled-components";
import { sizing, theme } from "src/guidelines/theme";

const StyledTopBar = styled.div<{ spacing?: string; gap?: string }>`
  display: flex;
  justify-content: ${({ spacing }) => spacing || "space-between"};
  align-items: center;
  padding: ${sizing(16)};
  gap: ${({ gap }) => (gap ? sizing(getGapSize(gap)) : `${sizing(16)}`)};
  border: 1px solid ${theme.color.primary100};
  border-radius: ${theme.borderRadius.default};
  box-shadow: ${theme.shadows.default};
  //? border bottom uniquement ?
`;

const SectionsStyle = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
  flex-basis: 0;
  box-sizing: border-box;
`;

const LeftSection = styled(SectionsStyle)``;
const CenterSection = styled(SectionsStyle)``;
const RightSection = styled(SectionsStyle)``;
const OneSection = styled(SectionsStyle)<{
  leftWidth?: string;
  centerWidth?: string;
  rightWidth?: string;
}>`
  width: ${({ leftWidth, centerWidth, rightWidth }) =>
    leftWidth || centerWidth || rightWidth || "auto"};
  flex: none;
`;

const getGapSize = (gap: string): number => {
  switch (gap) {
    case "small":
      return 8;
    case "medium":
      return 16;
    case "large":
      return 24;
    case "xlarge":
      return 32;
    case "xxlarge":
      return 40;
    default:
      return 16;
  }
};

type TopBarProps = AriaTopBarProps & {
  leftSection?: React.ReactNode;
  centerSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  gap?: string;
  spacing?: string;
  leftFlex?: number;
  centerFlex?: number;
  rightFlex?: number;
  leftWidth?: string;
  centerWidth?: string;
  rightWidth?: string;
};

type TopBarSpacing =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "space-evenly"
  | "space-between";

const TopBar = ({
  leftSection,
  centerSection,
  rightSection,
  gap,
  spacing,
  leftFlex = 1,
  centerFlex = 1,
  rightFlex = 1,
  leftWidth,
  centerWidth,
  rightWidth,
  ...props
}: TopBarProps) => {
  const ref = useRef(null);
  const { toolbarProps } = useToolbar(props, ref);

  let justifyContentValue: TopBarSpacing;
  switch (spacing) {
    case "start":
      justifyContentValue = "flex-start";
      break;
    case "end":
      justifyContentValue = "flex-end";
      break;
    case "center":
      justifyContentValue = "center";
      break;
    case "around":
      justifyContentValue = "space-around";
      break;
    case "evenly":
      justifyContentValue = "space-evenly";
      break;
    default:
      justifyContentValue = "space-between";
  }

  const hasSingleSection =
    [leftSection, centerSection, rightSection].filter(Boolean).length === 1;

  return (
    <StyledTopBar
      {...toolbarProps}
      gap={gap}
      spacing={justifyContentValue}
      ref={ref}
    >
      {hasSingleSection && (
        <OneSection
          leftWidth={leftWidth}
          centerWidth={centerWidth}
          rightWidth={rightWidth}
        >
          {leftSection || centerSection || rightSection}
        </OneSection>
      )}

      {leftSection && !hasSingleSection && (
        <LeftSection flex={leftFlex}> {leftSection}</LeftSection>
      )}
      {centerSection && (
        <CenterSection flex={centerFlex}>{centerSection}</CenterSection>
      )}
      {rightSection && (
        <RightSection flex={rightFlex}>{rightSection}</RightSection>
      )}
    </StyledTopBar>
  );
};

export default TopBar;
