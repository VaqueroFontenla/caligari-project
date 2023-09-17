import { Box, styled } from '@mui/material'

export const CaligariFormElement = styled('form')(
  ({ theme }) => `
    display:grid;
    row-gap:${theme.spacing(4)};
    padding:${theme.spacing(2)}`
)

export const InputWrapper = styled(Box)(
  ({ theme }) => `
    display:grid;
    border-radius: ${theme.spacing(1)};
    border: 1px solid ${theme.palette.primary.light};
    padding: ${theme.spacing(3)};
    `
)

export const InnFeaturesWrapper = styled('ul')(
  ({ theme }) => `
    display: grid;
    grid-template-columns: auto auto;
    gap:${theme.spacing(2)} ${theme.spacing(3)};
    justify-content: start;
`
)
