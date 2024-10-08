import { sizing } from "src/guidelines/theme/index";

interface Color {
  [key: string]: string | { [key: string]: string };
  primary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  gray: string;
  dark: string;
  white: string;
  black: string;
  text: {
    [key: string]: string;
    light: string;
    dark: string;
    white: string;
  };
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;
  success100: string;
  success200: string;
  success300: string;
  success400: string;
  success600: string;
  success700: string;
  success800: string;
  success900: string;
  danger100: string;
  danger200: string;
  danger300: string;
  danger400: string;
  danger600: string;
  danger700: string;
  danger800: string;
  danger900: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning600: string;
  warning700: string;
  warning800: string;
  warning900: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  linkPrimary: string;
  linkSecondary: string;
  linkActive: string;
  linkVisited: string;
  linkDisabled: string;
}

interface Transition {}

interface Shadows {
  paper: string;
  base: string;
  navigation: string;
}

interface BorderRadius {
  default: string;
  small: string;
  large: string;
  big: string;
  round: string;
}

interface Breakpoints {
  minWidth: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

type Size = {
  xs: `${string}px`;
  sm: `${string}px`;
  md: `${string}px`;
  lg: `${string}px`;
  xl: `${string}px`;
  xxl: `${string}px`;
};

interface Theme {
  color: Color;
  transitions: Transition;
  size: Size;
  shadows: Shadows;
  borderRadius: BorderRadius;

  typographies: {
    lineHeight: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      bold: number;
    };
    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
    };
  };

  /**
   * Sizing
   * Function to convert a pixel value to a rem value.
   * |   PX   |    Rem    |
   * |--------|-----------|
   * | 1px    | 0,0625rem |
   * | 2px    | 0,125rem  |
   * | 3px    | 0,1875rem |
   * | 4px    | 0,25rem   |
   * | 5px    | 0,3125rem |
   * | 6px    | 0,375rem  |
   * | 7px    | 0,4375rem |
   * | 8px    | 0,5rem    |
   * | 10px   | 0,625rem  |
   * | 12px   | 0,75rem   |
   * | 14px   | 0,875rem  |
   * | 16px   | 1rem      |
   * | 24px   | 1,5rem    |
   * | 32px   | 2rem      |
   * | 40px   | 2,5rem    |
   * | 60px   | 3,75rem   |
   * | 80px   | 5rem      |
   * | 100px  | 6,25rem   |
   */
  sizing: (...values: Array<number>) => string;
}

const typographies = {
  lineHeight: {
    xs: "1",
    sm: "1.25",
    base: "1.375",
    md: "1.5",
    lg: "2",
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },

  fontSize: {
    xxs: sizing(9),
    xs: sizing(10),
    sm: sizing(12),
    base: sizing(14),
    md: sizing(16),
    lg: sizing(18),
    xl: sizing(20),
    xxl: sizing(24),
    xxxl: sizing(36),
    xxxxl: sizing(48),
  },
};

const theme: Theme = {
  transitions: {
    //? Framer ?
  },

  size: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },

  color: {
    primary: "#4338CA",
    success: "#4caf50",
    danger: "#C41C1C",
    warning: "#ffb000",
    link: "#007bff",
    info: "#17a2b8",
    gray: "#888888",
    dark: "#2F2F2F",
    white: "#ffffff",
    black: "#000000",
    text: {
      light: "#DADADA",
      dark: "#2F2F2F",
      white: "#FFFFFF",
    },

    // Primary variant
    primary100: "#E8E6F8",
    primary200: "#B9B4EB",
    primary300: "#8A83DE",
    primary400: "#5B51D1",
    primary600: "#3B31B1",
    primary700: "#2A237E",
    primary800: "#19154C",
    primary900: "#110e33",

    // Success variant
    success100: "#e9f5e9",
    success200: "#bce1bd",
    success300: "#8fcd92",
    success400: "#62b966",
    success600: "#439946",
    success700: "#306d32",
    success800: "#1c421e",
    success900: "#132c14",

    // Danger variant
    danger100: "#f8e3e3",
    danger200: "#e9aaaa",
    danger300: "#da7171",
    danger400: "#cb3838",
    danger600: "#ac1818",
    danger700: "#7b1111",
    danger800: "#4a0a0a",
    danger900: "#310707",

    // Warning variant
    warning100: "#fff5df",
    warning200: "#ffe19f",
    warning300: "#ffce60",
    warning400: "#ffba20",
    warning600: "#df9a00",
    warning700: "#9f6e00",
    warning800: "#604200",
    warning900: "#402c00",

    // Info variant
    info100: "#E2F3F6",
    info200: "#A8DCE4",
    info300: "#6EC5D3",
    info400: "#34AEC1",
    info600: "#148EA1",
    info700: "#0E6573",
    info800: "#093D45",
    info900: "#06292E",

    // Gray variant
    gray100: "#f0f0f0",
    gray200: "#d2d2d2",
    gray300: "#b5b5b5",
    gray400: "#979797",
    gray600: "#777777",
    gray700: "#555555",
    gray800: "#333333",
    gray900: "#111111",

    // Link variant
    linkPrimary: "#007bff",
    linkSecondary: "#6c757d",
    linkActive: "#004085",
    linkVisited: "#800080",
    linkDisabled: "#007bff61",
  },

  shadows: {
    paper:
      "0px 0px 4px rgba(0, 0, 0, 0.07), 0px 4px 40px 30px rgba(0, 0, 0, 0.04)",
    base: "0px 34px 60px -20px rgba(0, 0, 0, 0.1)",
    navigation:
      "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 7px 16px rgba(82, 62, 56, 0.07)",
  },

  borderRadius: {
    default: sizing(6),
    small: sizing(3),
    large: sizing(8),
    big: sizing(16),
    round: sizing(500),
  },

  typographies: typographies,

  sizing: sizing,
};

const breakpoints: Breakpoints = {
  minWidth: {
    xs: `(min-width: ${theme.size.xs})`,
    sm: `(min-width: ${theme.size.sm})`,
    md: `(min-width: ${theme.size.md})`,
    lg: `(min-width: ${theme.size.lg})`,
    xl: `(min-width: ${theme.size.xl})`,
    xxl: `(min-width: ${theme.size.xxl})`,
  },
};

export { theme, breakpoints };
export type { BorderRadius };
