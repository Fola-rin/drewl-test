import React from 'react'
import { ReactComponent as Star } from '../../assets/star.svg'

import './styles.css'

const ReviewsSection = () => {
    return (
        <div className="reviews">
            <h2>What our current users think of company</h2>

            <div className='rating-wrapper'>
                <div className='stars'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p><b>5.0</b> based on customer reviews.</p>
            </div>

            <div className='card-container'>
                <Card />
                <Card />
                <Card long />
            </div>
        </div>
    )
}

export default ReviewsSection

const Card = ({ long }) => {
    return <div className='card'>
        <p className='desc'>{long ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."}</p>
        <p><b>John doe, United Kingdom</b></p>
    </div>
}