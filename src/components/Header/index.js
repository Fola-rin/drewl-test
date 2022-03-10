import React from 'react'
import "./styles.css"

import { ReactComponent as Logo } from "../../assets/logo.svg"

const Header = () => {
    return (
        <div className="header">
            <div className='logo-wrapper'>
                <a href='/'><Logo /></a>
            </div>
            <div className='nav-links'>
                <div className='nav-link'>
                    <a href='/' className='transition'>Method</a>
                </div>
                <div className='nav-link'>
                    <a href='/' className='transition'>Changelog</a>
                </div>
                <div className='nav-link'>
                    <a href='/' className='transition'>Pricing</a>
                </div>
            </div>
            <div className="nav-cta">
                <div className='link'>
                    <a className='login transition' href='/'>Login</a>
                </div>
                <div className='link'>
                    <a className='get-started' href='/'>Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default Header