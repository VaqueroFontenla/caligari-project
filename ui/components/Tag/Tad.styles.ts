import styled from "styled-components";
import { colors, sizes } from "ui/theme";
import { rem } from "ui/utils/rem";

export const TagWrapper = styled.div`
  border: ${rem(2)} solid ${colors.black};
  border-radius: ${rem(sizes.base)};
  padding: ${rem(sizes.mini)} ${rem(sizes.small)};
`;
