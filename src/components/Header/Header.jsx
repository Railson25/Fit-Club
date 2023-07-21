import React, { useState } from 'react'
import {Link} from 'react-scroll'

import './Header.css'
import {Bars, Logo }from '../../assets'


export const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false
    const [menuOpened, setMenuOpened] = useState(false)
    return(
        <div className='header' id='home'>
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
                        <li className='header-menu-item'>
                        <Link
                                onClick={() => setMenuOpened(false)}
                                smooth={true}
                                to='home'
                                span={true}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='header-menu-item'>
                        <Link
                                onClick={() => setMenuOpened(false)}
                                smooth={true}
                                to='programs'
                                span={true}
                            >
                                Programs
                            </Link>
                        </li>
                        <li className='header-menu-item'>
                        <Link
                                onClick={() => setMenuOpened(false)}
                                smooth={true}
                                to='reasons'
                                span={true}
                            >
                                Why us
                            </Link>
                        </li>
                        <li className='header-menu-item'>
                        <Link
                                onClick={() => setMenuOpened(false)}
                                smooth={true}
                                to='plans'
                                span={true}
                            >
                                Plans
                            </Link>
                        </li>
                        <li className='header-menu-item'>
                            <Link
                                onClick={() => setMenuOpened(false)}
                                smooth={true}
                                to='testimonials'
                                span={true}
                            >
                                Testimonials
                            </Link>
                        </li>
                    </ul>

                ) 
            }
        </div>
    )
}