import { Box, styled } from '@mui/material'

export const CaligariFormElement = styled('form')(
  ({ theme }) => `
    display:grid;
    row-gap:${theme.spacing(4)};
    padding:${theme.spacing(2)}`
)

export const RatingWrapper = styled(Box)(
  ({ theme }) => `
    display:flex;
    justify-content: center;
    `
)
