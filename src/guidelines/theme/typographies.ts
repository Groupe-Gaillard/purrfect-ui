import { css } from "styled-components";
import { spacing } from "./index";
import { theme } from "./style";

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
    xxs: spacing(9),
    xs: spacing(10),
    sm: spacing(12),
    base: spacing(14),
    md: spacing(16),
    lg: spacing(18),
    xl: spacing(20),
    xxl: spacing(24),
    xxxl: spacing(36),
  },
};

// fontFamily: {
//   // TODO
// },

export const heading1 = css`
  margin: ${spacing(24)} 0 ${spacing(16)};
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.xxxl};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};
`;

export const heading2 = css`
  margin: ${spacing(24)} 0 ${spacing(16)};
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.xxl};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};
`;

export const heading3 = css`
  margin: ${spacing(24)} 0 ${spacing(16)};
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.xl};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};
`;

export const heading4 = css`
  margin: ${spacing(16)} 0 ${spacing(12)};
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.lg};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};
`;

export const heading5 = css`
  margin: ${spacing(12)} 0 ${spacing(8)};
  font-style: normal;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.md};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};
`;

export const heading6 = css`
  margin: ${spacing(12)} 0 ${spacing(8)};
  font-style: italic;
  font-weight: ${typographies.fontWeight.bold};
  font-size: ${typographies.fontSize.base};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.primary};
`;

export const body1 = css`
  font-style: normal;
  font-weight: ${typographies.fontWeight.normal};
  font-size: ${typographies.fontSize.base};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.text.dark};
`;

export const body2 = css`
  font-style: normal;
  font-weight: ${typographies.fontWeight.normal};
  font-size: ${typographies.fontSize.md};
  line-height: ${typographies.lineHeight.base};
  font-family: sans-serif;
  color: ${theme.color.text.dark};
`;

export const narrow = css`
  font-style: normal;
  font-weight: ${typographies.fontWeight.light};
  font-size: ${typographies.fontSize.sm};
  line-height: ${typographies.lineHeight.sm};
  letter-spacing: -4%;
  font-family: sans-serif;
  color: ${theme.color.text.dark};
`;
