import { Button, useTheme } from '@mui/material'
import { HomeLink, Logo, Navbar, StyledHeader } from './Header.styles'
import { routeProvider } from 'utils/routes'

const logoPath = '/images/logo.png'

export const Header = () => {
  const theme = useTheme()
  return (
    <StyledHeader>
      <Navbar>
        {' '}
        <HomeLink href={`${routeProvider.home}`}>
          <Logo src={logoPath} alt="Caligari Project logo" />
        </HomeLink>
        <Button variant="contained" disabled>
          Añadir Caligari
        </Button>
      </Navbar>
    </StyledHeader>
  )
}
