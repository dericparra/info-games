import React from 'react'
import Link from 'next/link'

import { Container, GameTitle } from './style'

const Cards = ({ title, gameImage, id }) => {
  return (
    <Link
      href={{
        pathname: '/gamePage',
        query: { gameId: id }
      }}
    >
      <Container style={{ backgroundImage: `url(${gameImage})` }}>
        <GameTitle>{title}</GameTitle>
      </Container>
    </Link>
  )
}

export default Cards
