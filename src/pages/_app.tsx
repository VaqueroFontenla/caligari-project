import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'
import { theme } from 'theme/theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { Header, Footer, Layout } from '../components'
import 'leaflet/dist/leaflet.css'

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </div>
  )
}
