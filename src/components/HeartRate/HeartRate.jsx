import React from "react";

import './HeartRate.css'
import { Heart } from "../../assets";

export const HeartRate = () => {
    return(
        <div className="heart-rate">
            <img src={Heart} className="heart-rate-image" alt="" />
            <span className="heart-rate-title">Heart Rate</span>
            <span className="heart-rate-number">116 bpm</span>
        </div>
    )
}