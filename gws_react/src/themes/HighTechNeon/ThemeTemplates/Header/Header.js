// header.js
import React from "react";
import "./header.css";
import ThemeControls from "../../themeControls/ThemeControls";
import Hamburger from "./components/hamburger/Hamburger";
import Logo from "../../themeComponents/Logos/3dLogo/3dLogo";
const lightLogo = `${process.env.PUBLIC_URL}/myLogo3d.png`;
const darkLogo = `${process.env.PUBLIC_URL}/myLogo3d-black.png`;

const Header = ({ toggleMenu }) => {
  return (
    <header className="header flex justify-center item-align-center">
      <div className="header-foot-container flex justify-between item-align-center">
        <div className="nav-left logo fif-container flex justify-center item-align-center">
          <a href="/">
            <Logo
              ContainerClassName="flex justify-center item-align-center logo"
              width="50px" // Width is set, and height will be 90% of this
              classname="responsive-logo"
            />
          </a>
        </div>
        <ThemeControls />
        <div className="nav-right fif-container flex justify-center item-align-center">
          <Hamburger toggleMenu={toggleMenu} /> {/* Pass toggleMenu prop */}
        </div>
      </div>
    </header>
  );
};

export default Header;
