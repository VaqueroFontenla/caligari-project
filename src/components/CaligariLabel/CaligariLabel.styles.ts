import { Box, styled } from '@mui/material'

export const CaligariLabelWrapper = styled(Box)(
  ({ theme }) => `
    display: inline-grid;
    grid-template-columns: auto 1fr;
    column-gap:${theme.spacing(1)};
    align-items: center;
    font-size: ${theme.spacing(3)};
    font-weight: bold;
    padding: ${theme.spacing(1)} ${theme.spacing(3)};
    background-color: ${theme.palette.background.default};
    border-radius:  ${theme.spacing(4)};
  `
)
