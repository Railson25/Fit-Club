import React from "react";

import './Calories.css'
import { Calories} from "../../assets";

export const CaloriesComponent = () => {
    return(
        <div className="calories">
            <img src={Calories} alt="" className="calories-img" />
            <div>
                <span className="calories-title">Calories Burned</span>
                <span className="calories-number">220 kcal</span>
            </div>
        </div>
    )
}