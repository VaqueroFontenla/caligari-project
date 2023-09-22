import { styled } from '@mui/material'

export const Layout = styled('main')(
  ({ theme }) => ` 
    position: relative;
    max-width: ${theme.breakpoints.values.lg}px;
    margin-top: 80px; /* Header height*/
    margin-left: auto;
    margin-right: auto;

    @media ${theme.breakpoints.values.sm} { 
      padding: ${theme.spacing(8)} ${theme.spacing(16)};
    }
`
)
