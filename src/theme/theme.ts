import { createTheme, lighten } from '@mui/material'

const themeColors = {
  primary: '#555555',
  secondary: '#CDF3E1',
  success: '#57CA22',
  warning: '#FFA319',
  error: '#FF1943',
  info: '#33C2FF',
  black: '#223354',
  white: '#ffffff',
  bodyBg: '#F8F8F8',
}

export const theme = createTheme({
  palette: {
    common: {
      black: themeColors.black,
      white: themeColors.white,
    },
    primary: {
      main: themeColors.primary,
      light: lighten(themeColors.primary, 0.3),
    },
    secondary: {
      main: themeColors.secondary,
    },
    background: { default: themeColors.bodyBg },
  },
  typography: {
    fontFamily:
      '"Open Sans ", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body2: {
      fontSize: 12,
    },
  },
  spacing: 4,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #__next': {
          width: '100%',
          height: '100%',
        },
        body: {
          margin: '0',
          boxSizing: 'border-box',
          backgroundColor: themeColors.bodyBg,
        },
        'h1, h2, h3, h4, h5': {
          margin: '0',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'span',
        },
      },
    },
  },
})
