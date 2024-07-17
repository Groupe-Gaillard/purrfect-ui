import { createStyledBreakpointsTheme } from "styled-breakpoints";
import { useMediaQuery } from "styled-breakpoints/use-media-query";
import { theme } from "src/guidelines/theme";

export enum Orientation {
  "portrait" = "portrait",
  "landscape" = "landscape",
}

const styledBreakpointsTheme = createStyledBreakpointsTheme({
  breakpoints: theme.size,
});

const mediaQueries = {
  xs: (orientation?: Orientation) =>
    styledBreakpointsTheme.breakpoints.up("xs", orientation),
  sm: (orientation?: Orientation) =>
    styledBreakpointsTheme.breakpoints.up("sm", orientation),
  md: (orientation?: Orientation) =>
    styledBreakpointsTheme.breakpoints.up("md", orientation),
  lg: (orientation?: Orientation) =>
    styledBreakpointsTheme.breakpoints.up("lg", orientation),
  xl: (orientation?: Orientation) =>
    styledBreakpointsTheme.breakpoints.up("xl", orientation),
  xxl: (orientation?: Orientation) =>
    styledBreakpointsTheme.breakpoints.up("xxl", orientation),
};

export default mediaQueries;

export const useIsMdScreen = (): boolean => {
  const isMdScreen = useMediaQuery(styledBreakpointsTheme.breakpoints.up("md"));

  return isMdScreen ?? false;
};
