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
  gap: ${({ gap }) => (gap ? sizing(getGapSize(gap)) : `${sizing(16)}`)};
  border: 1px solid ${theme.color.primary100};
  border-radius: ${theme.borderRadius.default};
  box-shadow: ${theme.shadows.default};
  //? border bottom uniquement ?
`;

const Section = styled.div<{ flex?: number }>`
  flex: ${({ flex }) => flex || 1};
  flex-basis: 0;
  padding: ${sizing(16)};
`;

const LeftSection = styled(Section)``;
const CenterSection = styled(Section)``;
const RightSection = styled(Section)``;

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
  leftChildren?: React.ReactNode;
  centerChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  gap?: string;
  spacing?: string;
  leftFlex?: number;
  centerFlex?: number;
  rightFlex?: number;
};

type TopBarSpacing =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "space-evenly"
  | "space-between";

const TopBar = ({
  leftChildren,
  centerChildren,
  rightChildren,
  gap,
  spacing,
  leftFlex = 1,
  centerFlex = 1,
  rightFlex = 1,
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

  return (
    <StyledTopBar
      {...toolbarProps}
      gap={gap}
      spacing={justifyContentValue}
      ref={ref}
    >
      {leftChildren && (
        <LeftSection flex={leftFlex}> {leftChildren}</LeftSection>
      )}
      {centerChildren && (
        <CenterSection flex={centerFlex}>{centerChildren}</CenterSection>
      )}
      {rightChildren && (
        <RightSection flex={rightFlex}>{rightChildren}</RightSection>
      )}
    </StyledTopBar>
  );
};

export default TopBar;
