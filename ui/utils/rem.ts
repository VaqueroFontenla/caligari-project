import { fontSize } from "ui/theme/fonts";

export const rem = (px: number, context: number = fontSize.base) =>
  `${(px / context) * 1}rem`;
