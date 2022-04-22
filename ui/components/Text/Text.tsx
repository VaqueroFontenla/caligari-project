import styled from "styled-components";
import { colors, font, fontWeigths } from "ui/theme";

type Size = keyof typeof font;
type Color = keyof typeof palette;
type Weight = keyof typeof fontWeigths;

const palette = {
  baseInverted: colors.white,
};

export interface TextProps {
  color?: Color;
  size?: Size;
  weight?: Weight;
}

export const Text = styled.span<TextProps>`
  ${(p) => font[p.size || "base"]};
  color: ${(p) => (p.color ? palette[p.color] : colors.grayDarker)};
  font-weight: ${(p) =>
    p.weight ? fontWeigths[p.weight] : fontWeigths.regular};
  margin-bottom: 0;
`;
