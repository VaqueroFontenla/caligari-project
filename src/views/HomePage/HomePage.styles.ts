import { styled, Box } from '@mui/material'

export const HomeWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile?: boolean; isListVisible?: boolean }>(
  ({ theme, isMobile, isListVisible }) => `
    display: grid;
    grid-template-columns: ${isListVisible ? '2fr 1fr' : '0fr 1fr'};
    column-gap: ${theme.spacing(2)};
    max-height: calc(100vh - 80px);
    transition: 1s;
   `
)
