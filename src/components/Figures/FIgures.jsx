import React from 'react'
import NumberCount from 'number-counter'
import './Figures.css'

export const Figures = () => {
    return(
        <div className="figures">
            <div className='figures-container'>
                <span className='figures-number'>
                    <NumberCount 
                        end={140} 
                        start={100}
                        delay='4'
                        preFix="+"  
                    />
                </span>
                <span className='figures-text'>expert coaches</span>
            </div>
            <div className='figures-container'>
                <span className='figures-number'>
                <NumberCount 
                        end={978} 
                        start={940}
                        delay='4'
                        preFix="+"  
                    />
                </span>
                <span className='figures-text'>members joined</span>
            </div>
            <div className='figures-container'>
                <span className='figures-number'>
                <NumberCount 
                        end={50} 
                        start={35}
                        delay='4'
                        preFix="+"  
                    />
                </span>
                <span className='figures-text'>fitness programs</span>
            </div>
        </div>
    )
}