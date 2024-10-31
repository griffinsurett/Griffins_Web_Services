// DarkLightSwitch.js
import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import CircleCheckbox from "../../themeComponents/CircleCheckbox/circle-checkbox";
import { useTheme } from "../ThemeContext"; // Use theme context
import "./dark-light-switch.css";

const DarkLightSwitch = () => {
  const { isLightMode, toggleTheme } = useTheme(); // Access theme state and toggle function

  return (
    <CircleCheckbox
      id="theme-toggle"
      checked={!isLightMode} // Dark mode is default
      onChange={toggleTheme}
      iconChecked={faMoon}
      iconUnchecked={faSun}
      iconColor={"var(--maintext-color)"}
    />
  );
};

export default DarkLightSwitch;
