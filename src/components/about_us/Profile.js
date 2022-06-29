import "./Profile.css";
import React from 'react';

export const Profile = ({ name, profileDescription }) => {
    return (
        <div className="profileContainer">
            <div className="profileTextContainer">
                <h1 className="profileHeader">{"MEET " + name}</h1>
                <h2 className="profileDescription">{profileDescription}</h2>
            </div>
            <img className="profileImg" src={require("../../images/profile-img.jpeg")} />
        </div>
    )
}
