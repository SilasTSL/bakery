import './Header.css';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';

export const Header = () => {
    return (
        <div className="headerContainer">
            <div className="leftHeader">
                <div className="shopHeaderLink  headerItem">SHOP</div>
                <div className="aboutUsHeaderLink  headerItem">OUR STORY</div>
                <div className="contactHeaderLink headerItem">CONTACT</div>
            </div>
            <div className="logoContainer">
                <img className="logo headerItem" src={require("../../images/logo.png")} />
            </div>
            <div className="rightHeader">
                <div className="socialIconContainer">
                    <FacebookFilled className="socialIcon" />
                    <InstagramFilled className="socialIcon" />
                    <TwitterSquareFilled className="socialIcon" />
                </div>
            </div>
        </div>
    )
}
