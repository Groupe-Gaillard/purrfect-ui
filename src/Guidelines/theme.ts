// Blue : 4338CA

// Red : CA4338

// Green : 38CA43

const theme = {
  color: {
    primary: "#4338CA",
    success: "#38CA43",
    danger: "#CA4338",
    warning: "#FFC300",
    info: "#17a2b8",
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

    // Danger variant

    // Warning variant
  },

  shadow: {
    paper:
      "0px 0px 4px rgba(0, 0, 0, 0.07), 0px 4px 40px 30px rgba(0, 0, 0, 0.04)",
    base: "0px 34px 60px -20px rgba(0, 0, 0, 0.1)",
    navigation:
      "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 7px 16px rgba(82, 62, 56, 0.07)",
  },

  borderRadius: {
    light: "3px",
    default: "6px",
    large: "8px",
    big: "16px",
  },

  /**
   * When we have remove the `space` key we could rename this method to `space(6)`
   * | Index | Value |
   * |-------|-------|
   * | 0     | 0px   |
   * | 1     | 2px   |
   * | 2     | 4px   |
   * | 3     | 8px   |
   * | 4     | 12px  |
   * | 5     | 16px  |
   * | 6     | 24px  |
   * | 7     | 32px  |
   * | 8     | 40px  |
   * | 9     | 48px  |
   * | 10    | 56px  |
   * | 11    | 64px  |
   * | 12    | 72px  |
   * | 13    | 80px  |
   * | 14    | 88px  |
   * | 15    | 96px  |
   */
  spacing(...offsets: Array<number>): string {
    const baseSize = [0, 2, 4, 8, 12, 16];

    return offsets
      .map((offset) => {
        if (offset < baseSize.length) {
          return `${baseSize[offset]}px`;
        }

        return `${16 + (offset - baseSize.length + 1) * 8}px`;
      })
      .join(" ");
  },
};

export { theme };
