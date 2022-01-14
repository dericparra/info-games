import React from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Main from '../components/Main'

import Head from 'next/head'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Info Games</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/joystick_1f579-fe0f.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
      <Main />

      <Footer />
    </div>
  )
}
