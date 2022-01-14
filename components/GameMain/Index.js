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
  console.log(platforms)
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
              <InfosItem>{platforms.join(', ')}</InfosItem>
            </InfosList>
            <InfosList>
              <InfosItem>{genres.join(', ')} </InfosItem>
            </InfosList>
            <InfosList>
              <InfosItem>{developer.join(', ')} </InfosItem>
            </InfosList>
          </InfosContainer>
        </GameReview>
      </Container>
    </>
  )
}

export default GameMain
