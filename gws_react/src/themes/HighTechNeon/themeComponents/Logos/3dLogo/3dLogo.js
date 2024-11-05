// 3dLogo.js
import React, { useState } from "react";
import VisibilitySensor from "../../../themeControls/VisibilitySensor/VisibilitySensor";
import "./3d-logo.css";
import { useTheme } from "../../../themeControls/ThemeContext";

const light3dLogo = `${process.env.PUBLIC_URL}/mylogo3d.png`;
const dark3dLogo = `${process.env.PUBLIC_URL}/mylogo3d-black.png`;

const Logo = ({
  width,
  classname = "",
  ContainerClassName = "",
  onClick,
  responsive = false,
  everdarkLogo = false,
  everlightLogo = false,
}) => {
  const { isLightMode } = useTheme();
  const calculatedHeight = `${parseFloat(width) * 1.15}px`;
  const logoSrc = everdarkLogo
    ? dark3dLogo
    : everlightLogo
    ? light3dLogo
    : isLightMode
    ? dark3dLogo
    : light3dLogo;

  const [animate, setAnimate] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        setAnimate(isVisible);
      }}
      resetOnHover={true} // Reset animation on hover
    >
      <div
        className={`flex justify-center item-align-center ${
          animate ? "fade-in" : ""
        } ${ContainerClassName}`}
      >
        <img
          src={logoSrc}
          alt={isLightMode ? "Light Mode Logo" : "Dark Mode Logo"}
          onClick={onClick}
          className={`${classname} ${responsive ? "responsive-logo" : ""}`}
          style={{
            height: responsive ? "auto" : calculatedHeight,
            width: responsive ? "100%" : width,
          }}
        />
      </div>
    </VisibilitySensor>
  );
};

export default Logo;
