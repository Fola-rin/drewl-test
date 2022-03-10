import React from 'react'
import "./App.css"
import FeaturesSection from './components/FeaturesSection'

import Header from './components/Header'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

export default App