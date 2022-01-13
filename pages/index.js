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
