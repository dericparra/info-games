import React from 'react'
import Cards from '../Cards'
import SubtitleHome from '../SubtitleHome'

import { Container, CardsContainer } from './style'

const Main = () => {
  return (
    <Container>
      <SubtitleHome />
      <CardsContainer>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </CardsContainer>
    </Container>
  )
}

export default Main
