import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import GameHero from '../components/GameHero'

import Head from 'next/head'
import GameMain from '../components/GameMain/Index'

export default function GamePage() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header hasBack />
      <GameHero />
      <GameMain />
      <Footer />
    </>
  )
}
