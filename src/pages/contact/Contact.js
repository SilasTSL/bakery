import "./Contact.css";
import React from 'react';

export const Contact = ({ data }) => {
    return (
        <div className="contactContainer">
            <img className="contactImage" src={require("../../images/contact-img.jpeg")} />
            <div className="contactTextContainer">
                <h1 className="contactHeader">GET IN TOUCH</h1>
                <div className="contactInformation">
                    <div className="shopInformationContainer">
                        <div className="operatingHoursContainer">
                            <h2 className="shopInformationHeader">Operating Hours</h2>
                            <h3>{"Mon - Fri: " + data.weekdaysHours}</h3>
                            <h3>{"Sat - Sun: " + data.weekendHours}</h3>
                        </div>
                        <div className="addressContainer">
                            <h2 className="shopInformationHeader">Address</h2>
                            <h3>{data.address}</h3>
                            <h3>{data.postalCode}</h3>
                        </div>
                    </div>
                </div>
                <h2 className="contactNumber">{data.number}</h2>
                <h2 className="shopEmail">{data.email}</h2>
            </div>
        </div>
    )
}
