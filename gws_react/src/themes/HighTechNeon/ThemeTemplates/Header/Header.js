// Header.js
import React, { useState } from "react";
import "./header.css";
import ThemeControls from "../../themeControls/ThemeControls";
import Hamburger from "./components/hamburger/Hamburger";
import Logo from "../../themeComponents/Logos/3dLogo/3dLogo";
import VisibilitySensor from "../../themeControls/VisibilitySensor/VisibilitySensor";

const Header = ({ toggleMenu }) => {
  const [animate, setAnimate] = useState(false);

  return (
    <header className="header flex justify-center item-align-center">
      <div className="header-foot-container flex justify-between item-align-center">
        <div className="nav-left logo fif-container flex justify-center item-align-center logo-drop-shadow-small">
          <VisibilitySensor
            onChange={(isVisible) => setAnimate(isVisible)}
            oneTime={true} // Only animate the first time it appears
          >
            {({ isVisible }) => (
              <a href="/">
                <Logo
                  ContainerClassName={`flex justify-center item-align-center logo ${
                    isVisible ? "fade-in" : ""
                  }`}
                  width="45px" // Width is set, and height will be 90% of this
                  classname="responsive-logo"
                  everdarkLogo={true}
                />
              </a>
            )}
          </VisibilitySensor>
        </div>
        <ThemeControls />
        <div className="nav-right fif-container flex justify-center item-align-center">
          <Hamburger toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
