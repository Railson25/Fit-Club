import React from 'react'

import './Figures.css'

export const Figures = () => {
    return(
        <div className="figures">
            <div className='figures-container'>
                <span className='figures-number'>+140</span>
                <span className='figures-text'>expert coaches</span>
            </div>
            <div className='figures-container'>
                <span className='figures-number'>+978</span>
                <span className='figures-text'>members joined</span>
            </div>
            <div className='figures-container'>
                <span className='figures-number'>+50</span>
                <span className='figures-text'>fitness programs</span>
            </div>
        </div>
    )
}