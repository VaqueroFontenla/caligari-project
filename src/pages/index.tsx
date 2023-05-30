import Head from 'next/head'
import { Open_Sans } from 'next/font/google'
import { theme } from 'theme/theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

const open_sans = Open_Sans({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Proyecto Caligari</title>
        <meta name="description" content="Guía de los más selectos 'bares/qué lugares'" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <h1>Proyecto caligari</h1>
        </>
      </ThemeProvider>
    </>
  )
}
