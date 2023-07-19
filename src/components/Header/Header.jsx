import React from 'react'

import './Header.css'
import Logo from '../../assets/logo.png'

export const Header = () => {
    return(
        <div className='header'>
            <img src={Logo} className='logo' alt="" />

            <ul className='header-menu'>
                <li className='header-menu-item'>Home</li>
                <li className='header-menu-item'>Programs</li>
                <li className='header-menu-item'>Why us</li>
                <li className='header-menu-item'>Plans</li>
                <li className='header-menu-item'>Testimonials</li>
            </ul>
        </div>
    )
}