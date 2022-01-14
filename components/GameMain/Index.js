import React from 'react'
import {
  Container,
  GameDescription,
  GameName,
  GameReview,
  TextContainer,
  InfosList,
  MetacritNote,
  InfosContainer,
  InfosItem
} from './style'

const GameMain = ({
  title,
  description,
  metacritic,
  genres,
  developer,
  platforms
}) => {
  return (
    <>
      <Container>
        <TextContainer>
          <GameName>{title}</GameName>
          <GameDescription>{description}</GameDescription>
        </TextContainer>
        <GameReview>
          <MetacritNote>{metacritic}</MetacritNote>
          <InfosContainer>
            <InfosList>
              <InfosItem>
                <b>Plataformas: </b>
                {platforms.join(', ')}
              </InfosItem>
            </InfosList>
            <InfosList>
              <InfosItem>
                <b>Gêneros: </b>
                {genres.join(', ')}{' '}
              </InfosItem>
            </InfosList>
            <InfosList>
              <b>Desenvolvedores: </b>
              <InfosItem>{developer.join(', ')} </InfosItem>
            </InfosList>
          </InfosContainer>
        </GameReview>
      </Container>
    </>
  )
}

export default GameMain
