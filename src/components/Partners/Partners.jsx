import React from "react";

import './Partners.css'
import { adidas, nb, nike } from "../../assets";

export const Partners = () => {
    return(
        <div className="partners">
            <img src={nb} alt="" className="partners-img" />
            <img src={adidas} alt="" className="partners-img" />
            <img src={nike} alt="" className="partners-img" />
        </div>
    )
}