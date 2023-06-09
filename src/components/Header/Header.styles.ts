import { styled } from '@mui/material'

export const StyledHeader = styled('header')(
  ({ theme }) => `
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    z-index: 1;
    background-color: ${theme.palette.common.white};
    box-shadow: ${theme.palette.boxShadow.main};
`
)
