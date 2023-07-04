import { Button, useTheme } from '@mui/material'
import { HomeLink, Logo, Navbar, StyledHeader } from './Header.styles'
import { routeProvider } from 'utils/routes'
import { useToggle } from '@/hooks/useToggle'
import { CaligariForm } from '../index'

const logoPath = '/images/logo.png'

export const Header = () => {
  const theme = useTheme()
  const { isVisible: isOpenAddCaligariModal, toggle: toggleAddcaligariModal } = useToggle()
  return (
    <StyledHeader>
      <Navbar>
        {isOpenAddCaligariModal && (
          <CaligariForm open={isOpenAddCaligariModal} onClose={toggleAddcaligariModal} />
        )}
        <HomeLink href={`${routeProvider.home}`}>
          <Logo src={logoPath} alt="Caligari Project logo" />
        </HomeLink>
        <Button variant="contained" onClick={toggleAddcaligariModal}>
          Añadir Caligari
        </Button>
      </Navbar>
    </StyledHeader>
  )
}
