import "./Display.css";
import React from 'react'

export const Display = ({ orientation, name, subtext, id }) => {
    const images = [
        <img className="displayImage" src={require("../../images/display-img1.jpeg")} />,
        <img className="displayImage" src={require("../../images/display-img2.jpeg")} />
    ];
    return (
        <div className={orientation + "DisplayContainer"}>
            <div className="displayTextContainer">
                <h2 className="displayName">{name}</h2>
                <h3 className="displaySubtext">{subtext}</h3>
                <input className="shopNowBtn" type="button" value="SHOP NOW" />
            </div>
            <div className="displayImageContainer">
                {images[id]}
            </div>
        </div>
    )
}
