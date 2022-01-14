import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 280px;
  border-radius: 5px;
  height: 80px;
  justify-content: flex-start;
  background-color: #2f2f2f;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const GameTitle = styled.h2`
  font-size: 14px;
  font-weigth: 700;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 4px 6px;
  alig-self: left;
  margin-left: 10px;
  border-radius: 4px;
`
