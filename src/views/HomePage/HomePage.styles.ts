import { styled, Box } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'

export const DesktopHomeWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(prop as string) && prop !== 'isListVisible',
})<{ isListVisible?: boolean }>(
  ({ theme, isListVisible }) => `
      display: grid;
      grid-template-columns: ${isListVisible ? '2fr 1fr' : '0fr 1fr'};
      column-gap: ${theme.spacing(2)};
      max-height: calc(100vh - 80px);
      transition: 1s;
      & > div {
        height: calc(100vh - 80px);
      }
    `
)

export const MobileHomeWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(prop as string) && prop !== 'isListVisible',
})<{ isMobile?: boolean; isListVisible?: boolean }>(
  ({ theme, isListVisible }) => `
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      & > div:last-child {
        background-color: ${theme.palette.background.default};
        border-radius: ${theme.spacing(8)};
        padding: ${theme.spacing(8)};
        margin-top: -${theme.spacing(20)};
        z-index: 1;
      }
    
      `
)
