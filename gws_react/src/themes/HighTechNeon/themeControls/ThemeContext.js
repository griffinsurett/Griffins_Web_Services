// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { setCookie, getCookie } from "../../../components/cookies/cookies";

// Create the Theme Context
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(() => {
      const savedMode = getCookie("theme");
      return savedMode ? savedMode === "light" : false; // Default to dark mode
    });

  const hideElementsBasedOnMode = (className, hideInLightMode) => {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => {
      if (hideInLightMode) {
        element.style.display = isLightMode ? "none" : "block";
      } else {
        element.style.display = isLightMode ? "block" : "none";
      }
    });
  };

  const convertHexToRgb = (hex) => {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : null;
  };

  const applyTheme = (lightMode) => {
    const theme = lightMode ? "light" : "dark";
    document.documentElement.setAttribute('data-theme', theme); // Set the theme on the HTML root element

    hideElementsBasedOnMode("hide-in-light", true);
    hideElementsBasedOnMode("hide-in-dark", false);
    hideElementsBasedOnMode("complex-shadow", true);

    let primaryColor = lightMode
      ? "var(--lightBG-primary-color)"
      : "var(--darkBG-primary-color)";

    if (lightMode) {
      document.documentElement.style.setProperty(
        "--primary-color",
        "var(--lightBG-primary-color)"
      );
      document.documentElement.style.setProperty(
        "--maintext-color",
        "var(--lightBG-maintext-color)"
      );
      document.documentElement.style.setProperty(
        "--background-color",
        "var(--lightBG-background-color)"
      );
      document.documentElement.style.setProperty(
        "--secondary-bg",
        "var(--lightBG-secondary-bg)"
      );
      document.documentElement.style.setProperty(
        "--transparentFade-bg",
        "var(--lightBG-transparentFade-bg)"
      );
      document.documentElement.style.setProperty(
        "--transparentFade-bg1",
        "var(--lightBG-transparentFade-bg1)"
      );
      document.documentElement.style.setProperty(
        "--transparentFade-bg2",
        "var(--lightBG-transparentFade-bg2)"
      );
      document.documentElement.style.setProperty(
        "--dynamicIconBorder",
        "var(--lightBG-dynamicIconBorder)"
      );
      document.documentElement.style.setProperty(
        "--dynamicIconBG",
        "var(--lightBG-dynamicIconBG)"
      );
      document.documentElement.style.setProperty(
        "--dynamicButtonHover",
        "var(--lightBG-dynamicButtonHover)"
      ); 
      document.documentElement.style.setProperty(
        "--dynamicIconHover",
        "var(--lightBG-dynamicIconHover)"
      );
      document.documentElement.style.setProperty(
        "--complex-box-shadow",
        "var(--lightBG-complex-box-shadow)"
      );
      document.documentElement.style.setProperty(
        "--dropshadow1",
        "var(--lightBG-dropshadow1)"
      );
      document.documentElement.style.setProperty(
        "--dropshadow2",
        "var(--lightBG-dropshadow2)"
      );
      document.documentElement.style.setProperty(
        "--dropshadow3",
        "var(--lightBG-dropshadow3)"
      );

      document.documentElement.style.setProperty(
        "--boxShadow1",
        "var(--lightBG-boxShadow1)"
      );
      document.documentElement.style.setProperty(
        "--text-shadow",
        "var(--lightBG-textShadow1)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--primary-color",
        "var(--darkBG-primary-color)"
      );
      document.documentElement.style.setProperty(
        "--maintext-color",
        "var(--darkBG-maintext-color)"
      );
      document.documentElement.style.setProperty(
        "--background-color",
        "var(--darkBG-background-color)"
      );
      document.documentElement.style.setProperty(
        "--secondary-bg",
        "var(--darkBG-secondary-bg)"
      );
      document.documentElement.style.setProperty(
        "--transparentFade-bg",
        "var(--darkBG-transparentFade-bg)"
      );
      document.documentElement.style.setProperty(
        "--transparentFade-bg1",
        "var(--darkBG-transparentFade-bg1)"
      );
      document.documentElement.style.setProperty(
        "--transparentFade-bg2",
        "var(--darkBG-transparentFade-bg2)"
      );
      document.documentElement.style.setProperty(
        "--text-shadow",
        "var(--darkBG-textShadow1)"
      );
      document.documentElement.style.setProperty(
        "--boxShadow",
        "0 0 2px var(--primary-color), 0 0 2px var(--primary-color) inset, 0 0 8px var(--primary-color), 0 0 8px var(--primary-color) inset, 0 0 15px var(--primary-color), 0 0 10px var(--primary-color) inset, 0 0 20px var(--primary-color)"
      );
      document.documentElement.style.setProperty(
        "--boxShadow1",
        "0 0 1px var(--primary-color), 0 0 1px var(--primary-color) inset, 0 0 4px var(--primary-color), 0 0 4px var(--primary-color) inset, 0 0 7.5px var(--primary-color), 0 0 5px var(--primary-color) inset, 0 0 10px var(--primary-color)"
        // "0 0 1px var(--primary-color), 0 0 1px var(--primary-color) inset, 0 0 4px var(--primary-color), 0 0 11px var(--primary-color) inset, 0 0 1px var(--primary-color), 0 0 1px var(--primary-color) inset, 0 0 1px var(--primary-color)"
      );
      document.documentElement.style.setProperty(
        "--boxShadow2",
        "0 0 .5px var(--primary-color), 0 0 .5px var(--primary-color) inset, 0 0 2px var(--primary-color), 0 0 2px var(--primary-color) inset, 0 0 3.75px var(--primary-color), 0 0 2.5px var(--primary-color) inset, 0 0 5px var(--primary-color)"
      );
      document.documentElement.style.setProperty(
        "--dropshadow1",
        "var(--darkBG-dropshadow1)"
      );
      document.documentElement.style.setProperty(
        "--dropshadow2",
        "var(--darkBG-dropshadow2)"
      );
      document.documentElement.style.setProperty(
        "--dropshadow3",
        "var(--darkBG-dropshadow3)"
      );
      document.documentElement.style.setProperty(
        "--complex-box-shadow",
        "var(--darkBG-complex-box-shadow)"
      );
      document.documentElement.style.setProperty(
        "--smalllogodropshadow",
        "drop-shadow(0 0 6px var(--primary-color)) drop-shadow(0 0 8px var(--primary-color)) drop-shadow(0 3px 12px var(--primary-color))"
      );
      document.documentElement.style.setProperty(
        "--largelogodropshadow",
        "drop-shadow(0 0 10px var(--primary-color)) drop-shadow(0 0 14px var(--primary-color)) drop-shadow(0 5px 14px var(--primary-color))"
      );
      document.documentElement.style.setProperty(
        "--dynamicIconBorder",
        "var(--darkBG-dynamicIconBorder)"
      );
      document.documentElement.style.setProperty(
        "--dynamicIconBG",
        "var(--darkBG-dynamicIconBG)"
      );
      document.documentElement.style.setProperty(
        "--dynamicIconHover",
        "var(--darkBG-dynamicIconHover)"
      );
      document.documentElement.style.setProperty(
        "--dynamicButtonHover",
        "var(--darkBG-dynamicButtonHover)"
      );
    }

    // Set the faint shadow's RGB equivalent with transparency
    const primaryColorRGB = convertHexToRgb(
      getComputedStyle(document.documentElement).getPropertyValue(primaryColor)
    );
    document.documentElement.style.setProperty(
      "--primary-color-rgb",
      primaryColorRGB
    );
  };

  useEffect(() => {
    applyTheme(isLightMode);
    setCookie("theme", isLightMode ? "light" : "dark", 30); // Save theme in cookies
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
