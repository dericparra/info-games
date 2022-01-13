import React from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
    </div>
  )
}
