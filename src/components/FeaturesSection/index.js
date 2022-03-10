import React from 'react'
import features from "../../assets/features.png"
import "./style.css"


const FeaturesSection = () => {
    return (
        <div className='features'>
            <Wrapper />
            <Wrapper right />
        </div>
    )
}

export default FeaturesSection


const Wrapper = ({ right }) => {
    return <div className={right ? 'wrapper right' : 'wrapper'}>
        <div className='text-wrapper'>
            <p className='sub-title' data-aos="fade-up" data-aos-easing="ease-in-out"
                data-aos-duration="650"
                data-aos-delay="200">This is a sub-title</p>
            <h2 data-aos="fade-up" data-aos-easing="ease-in-out"
                data-aos-duration="650"
                data-aos-delay="200">This is a heading</h2>
            <p className='desc' data-aos="fade-up" data-aos-easing="ease-in-out"
                data-aos-duration="650"
                data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            <div className='link-wrapper'>
                <a href='/' data-aos="fade-up" data-aos-easing="ease-in-out"
                    data-aos-duration="650"
                    data-aos-delay="400">Reserve your vault</a>
            </div>
        </div>
        <div className='img-wrapper'>
            <img src={features} alt="A feature" data-aos="zoom-in" data-aos-easing="ease-in-out"
                data-aos-duration="650"
                data-aos-delay="400" />
        </div>
    </div>
}