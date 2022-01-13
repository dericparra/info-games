import React from 'react'
import Image from 'next/image'

import { Container, GameTitle } from './style'

const Cards = () => {
  return (
    <Container>
      <Image src="/images/cardsImg.jpg" width={80} height={80} alt="Game" />
      <GameTitle>Jogo bolado de ps1</GameTitle>
    </Container>
  )
}

export default Cards
