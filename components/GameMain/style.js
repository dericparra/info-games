import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 690px;
  padding: 20px;
  height: auto;
  align-items: center;

  @media (min-width: 580px) {
    padding: 0;
    margin: 40px;
    justify-content: space-between;
  }
`
export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  align-text: left;
  margin-bottom: 20px;
`

export const GameName = styled.h1`
  width: 100%;
  font-size: 18px;
  color: white;
  font-weigth: bold;
`

export const GameDescription = styled.p`
  width: 100%;
  font-size: 14px;
  color: white;
  align-self: flex-start;
`

export const GameReview = styled.div`
  width: 280px;
  height: 80px;
  align-self: flex-start;
  background-color: #2f2f2f;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 580px) {
    width: 280px;
  }
`
