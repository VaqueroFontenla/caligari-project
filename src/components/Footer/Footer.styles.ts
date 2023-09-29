import { styled } from '@mui/material'

export const StyledFooter = styled('footer')(
  ({ theme }) => `
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 1;
    padding: ${theme.spacing(2)};
    text-align: center;
`
)
