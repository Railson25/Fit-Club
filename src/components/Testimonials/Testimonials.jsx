import React, { useState } from "react";
import {motion} from 'framer-motion'

import {testimonialsData} from '../../data/testimonialsData'
import './Testimonials.css'
import { leftArrow, rightArrow } from "../../assets";

export const Testimonials = () => {
    const [selected, setSelected] = useState(0)

    const tLength = testimonialsData.length
    const transition = {type: 'spring', duration : 3}

    return(
        <div className="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>

                <motion.span
                    key={selected}
                    transition={transition}
                    initial={{opacity: 0, x: -100}}
                    animate= {{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: 100}}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {testimonialsData[selected].name}   
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    transition={{...transition, duration: 2}}
                    initial={{opacity: 0, x:-100}}
                    whileInView={{opacity: 1, x: 0}}
                ></motion.div>
                <motion.div
                    transition={{...transition, duration: 2}}
                    initial={{opacity: 1, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                ></motion.div>
                <motion.img 
                    src={testimonialsData[selected].image} alt="" className="right-t-img" 
                    key={selected}
                    transition={transition}
                    initial={{opacity: 0, x: 100}}
                    animate= {{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -100}}
                    
                />

                <div className="arrows">
                    <img src={leftArrow} alt="" className="arrows-img"
                        onClick={() => {
                             selected === 0
                             ?setSelected(tLength -1)
                             :setSelected((prev) => prev -1)
                        }}
                    />
                    <img src={rightArrow} alt="" className="arrows-img"
                        onClick={() => {
                            selected === tLength -1
                            ?setSelected(0)
                            :setSelected((prev) => prev +1)
                       }}
                    />
                </div>
            </div>
        </div>

    )
}