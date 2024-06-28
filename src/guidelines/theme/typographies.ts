import { css } from "styled-components";
import { breakpoints, theme } from "src/guidelines/theme";
import { sizing } from "src/guidelines/theme/index";

export const typographies = {
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

// fontFamily: {
//   // TODO
// },

export const heading1 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.xxxl};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.xxxxl};
  }
`;

export const heading2 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.xxl};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.xxxl};
  }
`;

export const heading3 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.xl};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.xxl};
  }
`;

export const heading4 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.lg};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.xl};
  }
`;

export const heading5 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.md};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.lg};
  }
`;

export const heading6 = css`
  margin: 0;
  font-style: italic;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.base};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.md};
  }
`;

export const body1 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${typographies.fontWeight.normal};
  font-size: ${typographies.fontSize.base};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.text.dark};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.md};
  }
`;

export const body2 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${typographies.fontWeight.normal};
  font-size: ${typographies.fontSize.md};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.text.dark};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.lg};
  }
`;

export const narrow = css`
  margin: 0;
  font-style: normal;
  font-weight: ${typographies.fontWeight.light};
  font-size: ${typographies.fontSize.sm};
  line-height: ${typographies.lineHeight.sm};
  letter-spacing: -4%;
  font-family: sans-serif;
  color: ${theme.color.text.dark};

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.base};
  }
`;

export const buttonSmall = css`
  font-family: sans-serif;
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.xs};
  line-height: ${typographies.lineHeight.base};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.sm};
  }
`;

export const buttonNormal = css`
  font-family: sans-serif;
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.sm};
  line-height: ${typographies.lineHeight.base};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.base};
  }
`;

export const buttonLarge = css`
  font-family: sans-serif;
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.base};
  line-height: ${typographies.lineHeight.md};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media ${breakpoints.minWidth.md} {
    font-size: ${typographies.fontSize.md};
  }
`;
