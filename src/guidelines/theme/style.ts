/* Size
| px     | rem       |
| 1px    | 0,0625rem |
| 2px    | 0,125rem  |
| 3px    | 0,1875rem |
| 4px    | 0,25rem   |
| 5px    | 0,3125rem |
| 6px    | 0,375rem  |
| 7px    | 0,4375rem |
| 8px    | 0,5rem    |
| 10px   | 0,625rem  |
| 12px   | 0,75rem   |
| 14px   | 0,875rem  |
| 16px   | 1rem      |
| 24px   | 1,5rem    |
| 32px   | 2rem      |
| 40px   | 2,5rem    |
| 60px   | 3,75rem   |
| 80px   | 5rem      |
| 100px  | 6,25rem   |
*/

export const spacing = (value: number): string => {
  return `${value / 16}rem`;
};

const theme = {
  transitions: {
    //? Framer ?
  },

  breakpoints: {
    xxs: "",
    xs: "",
    m: "",
    md: "",
    lg: "",
  },

  color: {
    primary: "#4338CA",
    success: "#4caf50",
    danger: "#C41C1C",
    warning: "#ffb000",
    info: "#17a2b8",
    gray: "#888888",
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

    // Gray variant
    gray100: "#f0f0f0",
    gray200: "#d2d2d2",
    gray300: "#b5b5b5",
    gray400: "#979797",
    gray600: "#777777",
    gray700: "#555555",
    gray800: "#333333",
    gray900: "#111111",
  },

  shadow: {
    paper:
      "0px 0px 0.25rem rgba(0, 0, 0, 0.07), 0px 0.25rem 2.5rem 1.875rem rgba(0, 0, 0, 0.04)",
    base: "0px 2.125rem 3.75rem -1.25rem rgba(0, 0, 0, 0.1)",
    navigation:
      "0px 0px 0.1875rem rgba(0, 0, 0, 0.1), 0px 0.4375rem 1rem rgba(82, 62, 56, 0.07)",
  },

  borderRadius: {
    light: spacing(3),
    default: spacing(6),
    large: spacing(8),
    big: spacing(16),
    round: "50%",
  },

  spacing: spacing,
};

export { theme };
