import React from 'react'

import {programsData} from '../../data/programsData'
import './ProgramCategory.css'
import { RightArrow } from '../../assets'

export const ProgramCategory = () => {
    return(
        <div className="program-categories">
            {programsData.map((program) => 
                <div className="category">
                    {program.image}
                    <span className="category-heading">{program.heading}</span>
                    <span className="category-details">{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="" className="join-now-img" />
                    </div>
                </div>
            )}
        </div>
    )
}