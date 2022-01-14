import React from 'react'
import {
  Container,
  GameDescription,
  GameName,
  GameReview,
  TextContainer
} from './style'

const GameMain = ({ title, description }) => {
  return (
    <>
      <Container>
        <TextContainer>
          <GameName>{title}</GameName>
          <GameDescription>{description}</GameDescription>
        </TextContainer>
        <GameReview></GameReview>
      </Container>
    </>
  )
}

export default GameMain
