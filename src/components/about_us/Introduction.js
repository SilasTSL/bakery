import "./Introduction.css";
import React from 'react';

export const Introduction = ({ header, introductionSubtext }) => {
    return (
        <div className="introductionContainer">
            <img className="introductionImage" src={require("../../images/introduction-img.jpeg")} />
            <div className="introductionTextContainer">
                <h1 className="introductionHeader">{header}</h1>
                <h2 className="introductionSubtext">{introductionSubtext}</h2>
            </div>
        </div>
    )
}
