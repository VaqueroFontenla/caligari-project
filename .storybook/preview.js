import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../src/theme/theme'

/* snipped for brevity */

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
)

export const decorators = [withMuiTheme]
