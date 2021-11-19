import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg"
import moon from "../../assets/icon-moon.svg"
import avatar from "../../assets/image-avatar.jpg"


function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="logo.svg" />
            </div>
            <div className="mode">
                <div className="moon">
                    <img src={moon} alt="moon.svg" />
                </div>
                <div className="avatar">
                    <img src={avatar} alt="avatar.jpg" />
                </div>
            </div>
        </div>
    );
}
export default Header;