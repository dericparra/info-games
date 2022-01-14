import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../Cards'
import SubtitleHome from '../SubtitleHome'

import { Container, CardsContainer, Loading } from './style'

const Main = () => {
  const [gamesList, setGamesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://api.rawg.io/api/games?key=60dcd6f43f2b4354abeff866f270d26e')
      .then((response) => setGamesList(response.data.results))
      .then(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <Container>
          <SubtitleHome />
          <CardsContainer>
            {gamesList
              .filter((item, idx) => idx < 8)
              .map((item) => (
                <Cards
                  key={item.slug}
                  id={item.id}
                  title={item.name}
                  gameSlug={item.slug}
                  gameImage={item.background_image}
                />
              ))}
          </CardsContainer>
        </Container>
      )}
    </>
  )
}

export default Main
