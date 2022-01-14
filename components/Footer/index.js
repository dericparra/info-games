import React from 'react'

import { Container, Text, SiteLink } from './style'

const Footer = () => {
  return (
    <Container>
      <Text>Info Games ® 2022 </Text>

      <SiteLink href="https://dericparra.github.io/">
        {' '}
        Developed by Deric Parra
      </SiteLink>
    </Container>
  )
}

export default Footer
