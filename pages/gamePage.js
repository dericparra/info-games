import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import GameHero from '../components/GameHero'

import Head from 'next/head'
import { useRouter } from 'next/router'

import GameMain from '../components/GameMain/Index'
import { Loading } from '../components/Main/style'

import axios from 'axios'

export default function GamePage() {
  const [gameDetails, setGameDetails] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${router.query.gameId}?key=60dcd6f43f2b4354abeff866f270d26e`
      )
      .then((response) => setGameDetails(response.data))
      .then(() => setIsLoading(false))
  }, [])
  const rawPlatforms =
    gameDetails &&
    gameDetails.platforms.map((item) => {
      return item.platform.name
    })

  const rawGenres =
    gameDetails &&
    gameDetails.genres.map((item) => {
      return item.name
    })

  const rawDeveloper =
    gameDetails &&
    gameDetails.developers.map((item) => {
      return item.name
    })
  return (
    <>
      {isLoading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <>
          <Head>
            <title>Info Games: {gameDetails.name}</title>
            <link
              rel="icon"
              href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/joystick_1f579-fe0f.png"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Header hasBack />
          <GameHero gameImage={gameDetails.background_image} />
          <GameMain
            title={gameDetails.name}
            description={gameDetails.description_raw}
            metacritic={gameDetails.metacritic}
            platforms={rawPlatforms}
            genres={rawGenres}
            developer={rawDeveloper}
          />

          <Footer />
        </>
      )}
    </>
  )
}
