import React from 'react'
import Link from 'next/link'

import { Container, Title, GoBackText } from './style'

export default function Header({ hasBack }) {
  return (
    <Container>
      {hasBack ? (
        <Link href="/">
          <GoBackText>Voltar</GoBackText>
        </Link>
      ) : (
        ''
      )}
      <Title>Info Games</Title>
    </Container>
  )
}
