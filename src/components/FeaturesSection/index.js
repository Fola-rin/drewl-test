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
            <p className='sub-title'>This is a sub-title</p>
            <h2>This is a heading</h2>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            <div className='link-wrapper'>
                <a href='/'>Reserve your vault</a>
            </div>
        </div>
        <div className='img-wrapper'>
            <img src={features} alt="A feature" />
        </div>
    </div>
}