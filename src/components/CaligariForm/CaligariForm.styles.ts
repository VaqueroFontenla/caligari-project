import { Box, styled, Grid } from '@mui/material'

export const InnFeaturesWrapper = styled('ul')(
  ({ theme }) => `
    display: flex;
    flex-wrap: wrap;
    gap:${theme.spacing(2)} ${theme.spacing(4)};
    justify-content: start;
`
)
