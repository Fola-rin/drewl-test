import React from 'react'
import "./style.css"

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <h1>This the main heading for the website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <div className='link-wrapper'>
                <a href='/'>Reserve your vault</a>
            </div>
        </div>
    )
}

export default HeroSection