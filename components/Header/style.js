import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 770px;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: white;
`

export const GoBackText = styled.p`
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  font-family: 'Nunito', sans-serif;
  left: 10px;
  color: white;
  text-decoration: underline;
  @media (min-width: 580px) {
    left: 0;
  }
`
