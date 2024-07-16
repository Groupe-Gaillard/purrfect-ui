import React, { useRef } from "react";
import styled from "styled-components";
import { sizing, theme } from "src/guidelines/theme";

const StyledTopBar = styled.div<{ spacing?: string; gap?: string }>`
  display: flex;
  justify-content: ${({ spacing }) => spacing || "space-between"};
  align-items: center;
  padding: ${sizing(16)};
  gap: ${({ gap }) => (gap ? sizing(getGapSize(gap)) : `${sizing(16)}`)};
  border-bottom: 1px solid ${theme.color.primary100};
  box-shadow: ${theme.shadows.navigation};
`;

const SectionsStyle = styled.div<{
  flex?: number;
}>`
  box-sizing: border-box;
  flex: ${({ flex }) => (flex ? flex : "none")};
  flex-basis: 0;
`;

const LeftSection = styled(SectionsStyle)``;
const CenterSection = styled(SectionsStyle)``;
const RightSection = styled(SectionsStyle)``;
const OneSection = styled(SectionsStyle)<{
  sectionLeftWidth?: string;
  sectionCenterWidth?: string;
  sectionRightWidth?: string;
}>`
  width: ${({ sectionLeftWidth, sectionCenterWidth, sectionRightWidth }) =>
    sectionLeftWidth || sectionCenterWidth || sectionRightWidth || "auto"};
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

type TopBarProps = {
  leftSection?: React.ReactNode;
  centerSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  gap?: string;
  spacing?: string;
  leftFlex?: number;
  centerFlex?: number;
  rightFlex?: number;
  sectionLeftWidth?: string;
  sectionCenterWidth?: string;
  sectionRightWidth?: string;
  ariaLabel?: string;
};

type TopBarSpacing = "flex-start" | "flex-end" | "center";

const TopBar = ({
  leftSection,
  centerSection,
  rightSection,
  gap,
  spacing,
  leftFlex = 1,
  centerFlex = 1,
  rightFlex = 1,
  sectionLeftWidth,
  sectionCenterWidth,
  sectionRightWidth,
  ariaLabel,
}: TopBarProps) => {
  const ref = useRef(null);

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
    default:
      justifyContentValue = "center";
  }

  const hasSingleSection =
    [leftSection, centerSection, rightSection].filter(Boolean).length === 1;

  return (
    <StyledTopBar
      gap={gap}
      spacing={justifyContentValue}
      ref={ref}
      aria-label={ariaLabel}
    >
      {hasSingleSection && (
        <OneSection
          sectionLeftWidth={sectionLeftWidth}
          sectionCenterWidth={sectionCenterWidth}
          sectionRightWidth={sectionRightWidth}
        >
          {leftSection || centerSection || rightSection}
        </OneSection>
      )}

      {leftSection && !hasSingleSection && (
        <LeftSection flex={leftFlex}> {leftSection}</LeftSection>
      )}
      {centerSection && !hasSingleSection && (
        <CenterSection flex={centerFlex}>{centerSection}</CenterSection>
      )}
      {rightSection && !hasSingleSection && (
        <RightSection flex={rightFlex}>{rightSection}</RightSection>
      )}
    </StyledTopBar>
  );
};

export default TopBar;
export type { TopBarProps };
