import React from 'react'
import "./App.css"
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ReviewsSection from './components/ReviewsSection'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
    </div>
  )
}

export default App