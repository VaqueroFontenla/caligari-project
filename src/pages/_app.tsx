import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import { theme } from 'theme/theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { Header } from '../components'

const open_sans = Open_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={open_sans.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </div>
  )
}
