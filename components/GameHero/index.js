import React from 'react'

import { Container } from './style'

const Hero = ({ gameImage }) => {
  return (
    <Container>
      <img src={gameImage} height={270} width={770} alt="Joystick" />
    </Container>
  )
}

export default Hero
