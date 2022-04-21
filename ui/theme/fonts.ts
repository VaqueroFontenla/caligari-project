import { css } from "styled-components";

export const fontSize = {
  "3xl": 36.49,
  xxl: 32.437,
  xl: 25.63,
  l: 18,
  base: 16,
  m: 14.222,
  s: 12.642,
  xs: 11.24,
  xxs: 9.989,
};

export enum FontFamily {
  base = "Raleway",
  title = "Poppins",
}

export const fontWeigths = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export enum FontWeight {
  light = fontWeigths.light,
  regular = fontWeigths.regular,
  bold = fontWeigths.bold,
}

export type TextFontWeight = keyof typeof FontWeight;

export interface TypiValue {
  size: number;
  lineHeight: number;
  letterSpacing: number | null;
  family: FontFamily;
  weight?: FontWeight;
}

export interface TypiSize {
  default: TypiValue;
}

interface TypiConfig {
  [size: string]: TypiSize;
}

export const typi: TypiConfig = {
  "3xl": {
    default: {
      size: fontSize["3xl"],
      lineHeight: 40,
      letterSpacing: null,
      family: FontFamily.title,
    },
  },
  xxl: {
    default: {
      size: fontSize.xxl,
      lineHeight: 36,
      letterSpacing: null,
      family: FontFamily.title,
    },
  },
  xl: {
    default: {
      size: fontSize.xl,
      lineHeight: 32,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
  l: {
    default: {
      size: fontSize.l,
      lineHeight: 24,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
  base: {
    default: {
      size: fontSize.base,
      lineHeight: 24,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
  m: {
    default: {
      size: fontSize.m,
      lineHeight: 20,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
  s: {
    default: {
      size: fontSize.s,
      lineHeight: 16,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
  xs: {
    default: {
      size: fontSize.xs,
      lineHeight: 16,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
  xxs: {
    default: {
      size: fontSize.xxs,
      lineHeight: 12,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
};

const generateResponsiveFontSize = (size: TypiSize) => {
  return css`
    ${generateFontSize(size.default)};
  `;
};

const generateFontSize = (value: TypiValue) => {
  return css`
    font-size: ${`${(value.size / fontSize.base) * 1}rem`};
    line-height: ${value.lineHeight / value.size};
    font-family: ${value.family};
  `;
};

export const font = {
  "3xl": generateResponsiveFontSize(typi["3xl"]),
  xxl: generateResponsiveFontSize(typi.xxl),
  xl: generateResponsiveFontSize(typi.xl),
  l: generateResponsiveFontSize(typi.l),
  base: generateResponsiveFontSize(typi.base),
  m: generateResponsiveFontSize(typi.m),
  s: generateResponsiveFontSize(typi.s),
  xs: generateResponsiveFontSize(typi.xs),
  xxs: generateResponsiveFontSize(typi.xxs),
};
