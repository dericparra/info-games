import React from 'react'
import Link from 'next/link'

import { Container, GameTitle, GameImage } from './style'

const Cards = ({ title, gameImage, id }) => {
  return (
    <Link
      href={{
        pathname: '/gamePage',
        query: { gameId: id }
      }}
    >
      <Container>
        <GameImage src={gameImage} width={80} alt="Game" />
        <GameTitle>{title}</GameTitle>
      </Container>
    </Link>
  )
}

export default Cards
