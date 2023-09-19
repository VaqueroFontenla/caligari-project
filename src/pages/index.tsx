import Head from 'next/head'
import HomePage from '@/views/HomePage/HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Proyecto Caligari</title>
        <meta name="description" content="Guía de los más selectos 'bares/qué lugares'" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomePage />
    </>
  )
}
