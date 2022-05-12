import styled from "styled-components";
import { sizes, colors } from "ui/theme";
import { rem } from "ui/utils/rem";

export const Card = styled.article`
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
  border-radius: ${rem(sizes.tiny)};
  padding: ${rem(sizes.small)};
`;
