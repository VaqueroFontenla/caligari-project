import { styled } from '@mui/material'
import Link from 'next/link'

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

export const Navbar = styled('nav')(
  ({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    max-width: ${theme.breakpoints.values.lg}px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${theme.spacing(8)};
`
)

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const Logo = styled('img')(
  ({ theme }) => `
    width: 50%;
    height: 50%;
    cursor: pointer;
  }
`
)
