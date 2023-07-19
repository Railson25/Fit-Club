import React from 'react'

import './Reason.css'
import { Image1, Image2, Image3, Image4, tick } from '../../assets'

export const Reason = () => {
    return(
        <div className="reasons" id='reasons'>
            <div className="left-r">
                <img src={Image1} alt="" className='reasons-left-r-img' />
                <img src={Image2} alt="" className='reasons-left-r-img' />
                <img src={Image3} alt="" className='reasons-left-r-img' />
                <img src={Image4} alt="" className='reasons-left-r-img' />
            </div>
            <div className="right-r">
                <span>some reasons</span>

                <div>
                    <span className='stroke-text'>why</span>
                    <span> choose us?</span>
                </div
                >
                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" className='details-r-img' />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" className='details-r-img' />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" className='details-r-img' />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" className='details-r-img' />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span 
                    style={{color: 'var(--gray)', fontWeight: 'normal'}
                }>
                    OUR PARTNERS
                </span>
            </div>
        </div>
    )
}