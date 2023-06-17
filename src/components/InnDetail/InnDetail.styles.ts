import { styled, Box } from '@mui/material'

export const InnFeaturesWrapper = styled(Box)(
  ({ theme }) => `
display: inline-grid;
grid-template-columns: repeat(2,1fr);
gap: ${theme.spacing(2)};
justify-content: start;
`
)
