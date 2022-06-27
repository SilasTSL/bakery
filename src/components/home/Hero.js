import "./Hero.css";
import React from 'react'

export const Hero = ( {tagline, subTagline } ) => {
    return (
        <div className="heroContainer">
            <img className="heroImg" src={require("../../images/hero-img.jpeg")} />
            <div className="taglineContainer">
                <h1 className="tagline">{tagline}</h1>
                <h2 className="subTagline">{subTagline}</h2>
                <input className="shopNowBtn" type="button" value="SHOP NOW" />
            </div>
        </div>
    )
}
