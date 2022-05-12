import { rem } from "ui/utils/rem";
import styled from "styled-components";

import { sizes } from "ui/theme";

export const Layout = styled.section`
  min-height: calc(
    100vh - ${rem(sizes.huge)} - ${rem(sizes.huge)}
  ); /* Tamaño menú de cabecera */
  margin-top: ${rem(sizes.huge)};
  padding: ${rem(sizes.small)};
`;
