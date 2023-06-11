import { styled } from '@mui/material'

export const StyledFooter = styled('footer')(
  ({ theme }) => `
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;
    padding: ${theme.spacing(2)};
    margin-top:${theme.spacing(4)};
    text-align: center;
`
)
