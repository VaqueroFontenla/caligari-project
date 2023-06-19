import { Box, styled } from '@mui/material'

export const StyledInnsList = styled(Box)(
  ({ theme }) => `
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: ${theme.spacing(8)} ${theme.spacing(6)};
    justify-content: center;
`
)
