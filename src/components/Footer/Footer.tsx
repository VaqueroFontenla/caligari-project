import { Link } from '..'
import { StyledFooter } from './Footer.styles'
import { Box, Typography } from '@mui/material'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <StyledFooter>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          &copy; {currentYear} - Proyecto Caligari por el Patrimonio Hostelero
        </Typography>
        <Typography variant="body2">
          Hecho con cariño por &nbsp;
          <Link href="https://github.com/VaqueroFontenla" title="Loreto Vaquero Git Hub">
            Loretus
          </Link>
        </Typography>
      </Box>
    </StyledFooter>
  )
}
