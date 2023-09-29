import { styled } from '@mui/material'

export const Layout = styled('main')(
  ({ theme }) => ` 
    position: relative;
    max-width: ${theme.breakpoints.values.lg}px;
    min-height: calc(100vh - ${theme.spacing(20)} - ${theme.spacing(
    14
  )}); /* Header height + Footer height*/
    margin-top: ${theme.spacing(20)}; /* Header height */
    margin-left: auto;
    margin-right: auto;
`
)
