const spacing = (value: number): string => {
  return `${value / 16}rem`;
};

const theme = {
  fontSize: {
    xxs: spacing(9),
    xs: "10px",
    sm: "12px",
    base: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },

  lineHeight: {
    xs: "1",
    sm: "1.25",
    base: "1.375",
    md: "1.5",
    lg: "2",
  },

  heading: {
    h1: "24px",
    h2: "",
    h3: "",
    h4: "",
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },

  fontFamily: {
    // TODO
  },

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
    success: "#38CA43",
    danger: "#CA4338",
    warning: "#FFC300",
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
    primary900: "#080719",

    // Success variant
    success100: "#E6F8E8",
    success200: "#B4EBB9",
    success300: "#83DE8A",
    success400: "#51D15B",
    success600: "#31b13b",
    success700: "#237e2a",
    success800: "#154c19",
    success900: "#071908",

    // Danger variant
    danger100: "#F8E8E6",
    danger200: "#EBB9B4",
    danger300: "#DE8A83",
    danger400: "#D15B51",
    danger600: "#B13B31",
    danger700: "#7E2A23",
    danger800: "#4C1915",
    danger900: "#190807",

    // Warning variant
    warning100: "#FFF8DF",
    warning200: "#FFE99F",
    warning300: "#FFDA60",
    warning400: "#FFCB20",
    warning600: "#DFAB00",
    warning700: "#9F7A00",
    warning800: "#604900",
    warning900: "#201800",

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
    light: "0.75rem",
    default: "0.375rem",
    large: "0.5rem",
    big: "1rem",
  },

  spacing: spacing,
};

export { theme };
