import { styled } from '@mui/material'

export const CaligariFormElement = styled('form')(
  ({ theme }) => `
    display:grid;
    row-gap:${theme.spacing(4)};
    padding:${theme.spacing(2)}`
)
