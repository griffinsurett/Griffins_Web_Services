// 2dLogo.js
import React, { useState } from "react";
import VisibilitySensor from "../../../themeControls/VisibilitySensor/VisibilitySensor";
import "./2d-logo.css";
import { useTheme } from "../../../themeControls/ThemeContext";

const light2dLogo = `${process.env.PUBLIC_URL}/mylogo2d-white.png`;
const dark2dLogo = `${process.env.PUBLIC_URL}/myLogo2d-black.png`;

const Logo = ({
  width,
  classname = "",
  ContainerClassName = "",
  onClick,
  responsive = false,
}) => {
  const { isLightMode } = useTheme();
  const calculatedHeight = width;
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !hasAnimated) {
          setHasAnimated(true);
        }
      }}
    >
      <div
        className={`flex justify-center item-align-center ${
          hasAnimated ? "jump-fade" : ""
        } ${ContainerClassName}`}
      >
        <img
          src={isLightMode ? dark2dLogo : light2dLogo}
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
