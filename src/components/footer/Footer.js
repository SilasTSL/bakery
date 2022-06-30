import "./Footer.css";
import React from 'react';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';

export const Footer = ({ data }) => {
    console.log(data);
    return (
        <div className="footerContainer">
            <div className="leftFooterContainer">
                <img className="footerLogo" src={require("../../images/logo.png")} />
            </div>
            <div className="middleFooterContainer">
                <h2 className="footerLink">
                    <a href="/store">
                        SHOP
                    </a>
                </h2>
                <h2 className="footerLink">
                    <a href="/ourstory">
                        ABOUT US
                    </a>
                </h2>
                <h2 className="footerLink">
                    <a href="/contact">
                        CONTACT
                    </a>
                </h2>                
                <h2 className="footerLink">
                    <a href="/termsandconditions">
                        TERMS & CONDITIONS
                    </a>
                </h2>            
            </div>
            <div className="rightFooterContainer">
                <h2 className="footerNumber">{data.number}</h2>
                <h2 className="footerEmail">{data.email}</h2>
                <div className="footerSocialsContainer">
                    <FacebookFilled className="footerSocialIcon" />
                    <InstagramFilled className="footerSocialIcon" />
                    <TwitterSquareFilled className="footerSocialIcon" />
                </div>
            </div>
        </div>
    )
}
