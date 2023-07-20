import React from "react";
import './Hero.css'
import { Header } from "../Header/Header";
import { TheBest } from "../TheBestButton/TheBest";
import { Figures } from "../Figures/FIgures";
import { HeroButtons } from "../HeroButton/HeroButtons";
import { HeartRate } from "../HeartRate/HeartRate";
import { Calories, hero_image, hero_image_back } from "../../assets";

export const Hero = () => {
    return(
        <div className="hero">

            <div className="blur blur-h"></div>
            <div className="left-h">
                <Header />
                <TheBest />
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>
                            Ideal Body
                        </span>
                    </div>
                    <div>
                        <span className="hero-text-span">
                            In here we will help you to shape and build your ideal body and live up your life to fullest                         
                        </span>
                    </div>
                </div>

                <Figures />
                <HeroButtons />
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <HeartRate />
                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />

                <div className="calories">
                    <img src={Calories} alt="" className="calories-img" />
                    <div>
                        <span className="calories-title">Calories Burned</span>
                        <span className="calories-number">220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}