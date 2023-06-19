import { styled } from '@mui/material'

export const Layout = styled('main')(
  ({ theme }) => ` 
  max-height: calc(100vh - 80px);
  max-width: ${theme.breakpoints.values.lg}px;
  margin-top: 80px; /* Header height*/
  margin-left: auto;
  margin-right: auto;
  padding: ${theme.spacing(8)} ${theme.spacing(16)};
`
)
