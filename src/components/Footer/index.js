import React from 'react'

import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Twitter } from "../../assets/socials/twitter.svg"
import { ReactComponent as Discord } from "../../assets/socials/discord.svg"
import { ReactComponent as Instagram } from "../../assets/socials/instagram.svg"
import { ReactComponent as Facebook } from "../../assets/socials/facebook.svg"

import './styles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='info'>
                <div className='logo-wrapper'>
                    <a href='/'><Logo /></a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='socials'>
                    <div className='link'>
                        <a href='https://twitter.com' target='_blank' rel='noreferrer'><Twitter /></a>
                    </div>
                    <div className='link'>
                        <a href='https://discord.com' target='_blank' rel='noreferrer'><Discord /></a>
                    </div>
                    <div className='link'>
                        <a href='https://Instagram.com' target='_blank' rel='noreferrer'><Instagram /></a>
                    </div>
                    <div className='link'>
                        <a href='https://facebook.com' target='_blank' rel='noreferrer'><Facebook /></a>
                    </div>
                </div>
            </div>
            <div className='page-links'>
                <div className='wrapper'>
                    <p><b>Company</b></p>
                    <div className='links'>
                        <div className='link'>
                            <a href='/' className="transition">Team </a>
                        </div>
                        <div className='link'>
                            <a href='/' className="transition">Careers </a>
                        </div>
                        <div className='link'>
                            <a href='/' className="transition"> Link </a>
                        </div>
                    </div>
                </div>
                <div className='wrapper'>
                    <p><b>Address</b></p>
                    <div className='links'>
                        <div className='link'>
                            <a href='/' className="transition">71 Shelton Road, London, England.</a> {/* I made the address a link because you want it to lead the user to a mao service like Google maps*/}
                        </div>
                    </div>
                </div>
                <div className='wrapper'>
                    <p><b>Contact</b></p>
                    <div className='links'>
                        <div className='link'>
                            <a href='/' className="transition">Get in touch </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer