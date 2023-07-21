import React, { useState } from 'react'

import './Header.css'
import {Bars, Logo }from '../../assets'


export const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false
    const [menuOpened, setMenuOpened] = useState(false)
    return(
        <div className='header'>
            <img src={Logo} className='logo' alt="" />

            {menuOpened === false && mobile === true
                ?(
                    <div 
                        className='mobile-container'
                        onClick={() => setMenuOpened(true)}                    
                    >
                        <img src={Bars} alt="" className='mobile-Logo'/>
                    </div> 
                ):(
                    <ul className='header-menu'>
                        <li onClick={() => setMenuOpened(false)} className='header-menu-item'>Home</li>
                        <li onClick={() => setMenuOpened(false)} className='header-menu-item'>Programs</li>
                        <li onClick={() => setMenuOpened(false)} className='header-menu-item'>Why us</li>
                        <li onClick={() => setMenuOpened(false)} className='header-menu-item'>Plans</li>
                        <li onClick={() => setMenuOpened(false)} className='header-menu-item'>Testimonials</li>
                    </ul>

                ) 
            }
        </div>
    )
}