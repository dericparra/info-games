import React from 'react'
import Image from 'next/image'

import { Container } from './style'

const Hero = () => {
  return (
    <Container>
      <Image
        src="/images/heroImg.png"
        height={270}
        width={770}
        alt="Joystick"
      />
    </Container>
  )
}

export default Hero
