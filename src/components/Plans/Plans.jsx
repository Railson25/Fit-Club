import React from 'react'

import './Plans.css'
import { PlansCard } from '../PlansCard/PlansCard'

export const Plans = () => {
    return(
        <div className="plans-container">
            <div className="programs-header" style={{gap: '2rem'}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            
            <PlansCard />
        </div>
    )
}