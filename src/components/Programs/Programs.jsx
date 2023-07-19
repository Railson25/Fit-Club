import React from 'react'

import './Programs.css'
import { ProgramCategory } from '../ProgramCategory/ProgramCategory'

export const Programs = () => {
    return(
        <div className='programs' id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <ProgramCategory />
        </div>
    )
}