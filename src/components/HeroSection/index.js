import React from 'react'
import "./style.css"

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <h1 data-aos="fade-up" data-aos-easing="ease-in-out"
                data-aos-duration="650"
                data-aos-delay="200">This the main heading for the website</h1>
            <p data-aos="fade-up" data-aos-easing="ease-in-out"
                data-aos-duration="650"
                data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <div className='link-wrapper'>
                <a href='/' data-aos="zoom-in" data-aos-easing="ease-in-out"
                    data-aos-duration="650"
                    data-aos-delay="400">Reserve your vault</a>
            </div>
        </div>
    )
}

export default HeroSection