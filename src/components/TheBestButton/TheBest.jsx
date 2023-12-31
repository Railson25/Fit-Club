import React from 'react'
import {motion} from 'framer-motion'

import './TheBest.css'

export const TheBest = () => {
    const transition = {type: 'spring', duration : 3}
    const mobile = window.innerWidth <= 768 ? true : false
    return(
        <div className="the-best-ad">
            <motion.div 
                className="the-best-ad-div"
                initial={{left: mobile ? "178px" : "238px"}}
                whileInView={{left: '2px'}}
                transition={{...transition, type: 'tween'}}
            ></motion.div>
            <span className="the-best-ad-title">The best fitness club in the town.</span>
        </div>

    )
}