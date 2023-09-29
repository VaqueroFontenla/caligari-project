import { styled, Box } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'

export const DesktopHomeWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(prop as string) && prop !== 'isListVisible',
})<{ isListVisible?: boolean }>(
  ({ theme, isListVisible }) => `
      display: grid;
      grid-template-columns: ${isListVisible ? '2fr 1fr' : '1fr'};
      column-gap: ${theme.spacing(2)};
      max-height: calc(100vh - ${theme.spacing(20)} - ${theme.spacing(14)});
      transition: 1s;
      & > div {
        height: calc(100vh - ${theme.spacing(20)} - ${theme.spacing(14)});
      }
    `
)

export const MobileHomeWrapper = styled(Box, {
  shouldForwardProp: (prop) => isPropValid(prop as string) && prop !== 'isListVisible',
})<{ isMobile?: boolean; isListVisible?: boolean }>(
  ({ theme, isListVisible }) => `
      position: relative; 
       & > div:first-child {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: auto;
        height: 100vh;
      }
      & > div:last-child {
        transform: translate3d(0, 0px, 0);
        position: absolute; 
        top: 45vh;
        background-color: ${theme.palette.common.white};
        border-top-left-radius: ${theme.spacing(8)};
        border-top-right-radius: ${theme.spacing(8)};
        padding: ${theme.spacing(8)};
      }
      `
)
