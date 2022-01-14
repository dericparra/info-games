import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0 0 0 20px;
  width: 100%;
  max-width: 610px;
  heigth: auto;
  align-items: center;
  justify-content: flex-start;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 610px;
  align-items: flex-start;
  cursor: pointer;
  justify-content: space-between;
  @media (min-width: 580px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const Loading = styled.h1`
  width: 100%;
  text-align: center;
  margin-top: 100px;
  color: white;
`
