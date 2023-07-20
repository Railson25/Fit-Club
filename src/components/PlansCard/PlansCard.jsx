import React from "react";

import {plansData} from '../../data/plansData'
import './PlansCard.css'
import { whiteTick } from "../../assets";

export const PlansCard = () => {
    return(
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span className="plan-title">{plan.name}</span>
                    <span className="plan-price">$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature">
                                <img src={whiteTick} alt="" className="feature-img"/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span className="plan-text">See more benefits -> </span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
            ))}
        </div>
    )
}