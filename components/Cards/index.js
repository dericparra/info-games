import React from 'react'
import Link from 'next/link'

import { Container, GameTitle, Img } from './style'

const Cards = () => {
  return (
    <Link href="/gamePage">
      <Container>
        <Img src="/images/cardsImg.jpg" width={80} height={80} alt="Game" />
        <GameTitle>Jogo bolado de ps1</GameTitle>
      </Container>
    </Link>
  )
}

export default Cards
