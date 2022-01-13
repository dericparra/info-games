import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GameHero from '../components/GameHero'

export default function GamePage() {
  return (
    <>
      <Header hasBack />
      <GameHero />

      <Footer />
    </>
  )
}
