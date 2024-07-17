import { css } from "styled-components";
import { breakpoints, theme } from "src/guidelines/theme/style";

export const heading1 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.xxxl};
  line-height: ${theme.typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.xxxxl};
  }
`;

export const heading2 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.xxl};
  line-height: ${theme.typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.xxxl};
  }
`;

export const heading3 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.xl};
  line-height: ${theme.typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.xxl};
  }
`;

export const heading4 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.lg};
  line-height: ${theme.typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.xl};
  }
`;

export const heading5 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.md};
  line-height: ${theme.typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.lg};
  }
`;

export const heading6 = css`
  margin: 0;
  font-style: italic;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.base};
  line-height: ${theme.typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.md};
  }
`;

export const body1 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.normal};
  font-size: ${theme.typographies.fontSize.base};
  line-height: ${theme.typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.text.dark};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.md};
  }
`;

export const body2 = css`
  margin: 0;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.normal};
  font-size: ${theme.typographies.fontSize.md};
  line-height: ${theme.typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.text.dark};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.lg};
  }
`;

export const narrow = css`
  margin: 0;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.light};
  font-size: ${theme.typographies.fontSize.sm};
  line-height: ${theme.typographies.lineHeight.sm};
  letter-spacing: -4%;
  font-family: sans-serif;
  color: ${theme.color.text.dark};

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.base};
  }
`;

export const buttonSmall = css`
  font-family: sans-serif;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.xs};
  line-height: ${theme.typographies.lineHeight.base};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.sm};
  }
`;

export const buttonNormal = css`
  font-family: sans-serif;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.sm};
  line-height: ${theme.typographies.lineHeight.base};
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.sm};
  line-height: ${theme.typographies.lineHeight.base};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.base};
  }
`;

export const buttonLarge = css`
  font-family: sans-serif;
  font-style: normal;
  font-weight: ${theme.typographies.fontWeight.bold};
  font-size: ${theme.typographies.fontSize.base};
  line-height: ${theme.typographies.lineHeight.md};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media ${breakpoints.minWidth.md} {
    font-size: ${theme.typographies.fontSize.md};
  }
`;
