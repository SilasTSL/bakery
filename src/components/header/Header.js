import './Header.css';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';

export const Header = () => {
    return (
        <div className="headerContainer">
            <div className="leftHeader">
                <div className="shopHeaderLink  headerItem">
                    <a href="/store">
                        SHOP
                    </a>
                </div>
                <div className="aboutUsHeaderLink  headerItem">
                    <a href="/ourstory">
                        OUR STORY
                    </a>
                </div>
                <div className="contactHeaderLink headerItem">
                    <a href="/contact">
                        CONTACT
                    </a>
                </div>
            </div>
            <div className="logoContainer">
                <a href="/">
                    <img className="logo headerItem" src={require("../../images/logo.png")} />
                </a>
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
