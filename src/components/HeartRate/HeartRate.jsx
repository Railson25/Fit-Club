import React from "react";

import './HeartRate.css'
import { Heart } from "../../assets";
import {motion} from 'framer-motion'

export const HeartRate = () => {
    const transition = {type: 'spring', duration : 3}

    return(
        <motion.div 
            className="heart-rate"
            transition={transition}
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
        >
            <img src={Heart} className="heart-rate-image" alt="" />
            <span className="heart-rate-title">Heart Rate</span>
            <span className="heart-rate-number">116 bpm</span>
        </motion.div>
    )
}