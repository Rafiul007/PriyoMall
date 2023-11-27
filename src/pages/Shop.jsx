import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter.jsx/NewsLetter'
import Footer from '../components/footer/Footer'
function Shop() {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter />
      <Footer/>
    </div>
  )
}

export default Shop