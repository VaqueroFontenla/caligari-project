import { PaletteColorOptions, createTheme, lighten } from '@mui/material'
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    boxShadow: Palette['primary']
  }

  interface PaletteOptions {
    boxShadow?: PaletteOptions['primary']
  }
}
export const themeColors = {
  primary: '#555555',
  secondary: '#CDF3E1',
  success: '#57CA22',
  warning: '#FFA319',
  error: '#FF1943',
  info: '#33C2FF',
  black: '#223354',
  white: '#ffffff',
  bodyBg: '#F8F8F8',
  boxShadow:
    '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
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
    boxShadow: { main: themeColors.boxShadow },
  },
  typography: {
    fontFamily:
      '"Open Sans ", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body2: {
      fontSize: 12,
    },
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
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
        ul: {
          listStyle: 'none',
          padding: 0,
          margin: 0,
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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
          },
        },
      },
    },
  },
})
