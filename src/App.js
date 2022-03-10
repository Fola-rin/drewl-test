import React, { useEffect } from 'react'
import AOS from 'aos'

import "aos/dist/aos.css";
import "./App.css"

// Component imports
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ReviewsSection from './components/ReviewsSection'

// Asset imports
import bg from './assets/bg.svg'

const App = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className='container' style={{ backgroundImage: `url(${bg})` }}>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ReviewsSection />
      <Footer />
    </div>
  )
}

export default App