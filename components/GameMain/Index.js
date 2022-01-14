import React from 'react'
import {
  Container,
  GameDescription,
  GameName,
  GameReview,
  TextContainer
} from './style'

const GameMain = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <GameName>Jogo Bolado de ps1</GameName>
          <GameDescription>
            Humanity is under siege as the full force of Mentals hordes spread
            across the world, ravaging what remains of a broken and beaten
            civilization. The last remaining resistance to the invasion is the
            Earth Defense Force led by Sam Serious Stone and his heavily-armed
            squad of misfit
          </GameDescription>
        </TextContainer>
        <GameReview></GameReview>
      </Container>
    </>
  )
}

export default GameMain
