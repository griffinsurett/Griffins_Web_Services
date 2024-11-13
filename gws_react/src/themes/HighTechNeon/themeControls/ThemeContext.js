// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { setCookie, getCookie } from "../../../components/cookies/cookies";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedMode = getCookie("theme");
    return savedMode ? savedMode === "light" : false; // Default to dark mode
  });

  // Helper function to set or create the meta theme-color tag
  const setThemeColorMetaTag = (color) => {
    let themeMetaTag = document.querySelector("meta[name='theme-color']");
    if (!themeMetaTag) {
      themeMetaTag = document.createElement("meta");
      themeMetaTag.setAttribute("name", "theme-color");
      document.head.appendChild(themeMetaTag);
    }
    themeMetaTag.setAttribute("content", color);
  };

  const applyTheme = (lightMode) => {
    const theme = lightMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);

    const backgroundColor = lightMode
      ? "var(--lightBG-background-color)"
      : "var(--darkBG-background-color)";

    // Get computed color to set in meta tag
    const computedBgColor = getComputedStyle(document.documentElement)
      .getPropertyValue(backgroundColor)
      .trim();
    setThemeColorMetaTag(computedBgColor);

    // Apply all theme-related CSS variables
    const themeVariables = lightMode
      ? {
          "--primary-color": "var(--lightBG-primary-color)",
          "--maintext-color": "var(--lightBG-maintext-color)",
          "--background-color": "var(--lightBG-background-color)",
          "--secondary-bg": "var(--lightBG-secondary-bg)",
          "--transparentFade-bg": "var(--lightBG-transparentFade-bg)",
          "--transparentFade-bg1": "var(--lightBG-transparentFade-bg1)",
          "--transparentFade-bg2": "var(--lightBG-transparentFade-bg2)",
          "--dynamicIconBorder": "var(--lightBG-dynamicIconBorder)",
          "--dynamicIconBG": "var(--lightBG-dynamicIconBG)",
          "--dynamicButtonHover": "var(--lightBG-dynamicButtonHover)",
          "--dynamicIconHover": "var(--lightBG-dynamicIconHover)",
          "--complex-box-shadow": "var(--lightBG-complex-box-shadow)",
          "--dropshadow1": "var(--lightBG-dropshadow1)",
          "--dropshadow2": "var(--lightBG-dropshadow2)",
          "--dropshadow3": "var(--lightBG-dropshadow3)",
          "--boxShadow1": "var(--lightBG-boxShadow1)",
          "--text-shadow": "var(--lightBG-textShadow1)",
          "--smalllogodropshadow": "var(--lightBG-smalllogodropshadow)",
          "--largelogodropshadow": "var(--lightBG-largelogodropshadow)",
          "--icon-border-color": "var(--lightBG-icon-border-color)",
          "--icon-bg-color": "var(--lightBG-icon-bg-color)",
          "--button-bg-color": "var(--lightBG-button-bg-color)",
          "--button-hover-bg": "var(--lightBG-button-hover-bg)",
          "--button-border": "var(--lightBG-button-border)",
        }
      : {
          "--primary-color": "var(--darkBG-primary-color)",
          "--maintext-color": "var(--darkBG-maintext-color)",
          "--background-color": "var(--darkBG-background-color)",
          "--secondary-bg": "var(--darkBG-secondary-bg)",
          "--transparentFade-bg": "var(--darkBG-transparentFade-bg)",
          "--transparentFade-bg1": "var(--darkBG-transparentFade-bg1)",
          "--transparentFade-bg2": "var(--darkBG-transparentFade-bg2)",
          "--text-shadow": "var(--darkBG-textShadow1)",
          "--boxShadow": "0 0 2px var(--primary-color), 0 0 2px var(--primary-color) inset, 0 0 8px var(--primary-color), 0 0 8px var(--primary-color) inset, 0 0 15px var(--primary-color), 0 0 10px var(--primary-color) inset, 0 0 20px var(--primary-color)",
          "--boxShadow1": "0 0 1px var(--primary-color), 0 0 1px var(--primary-color) inset, 0 0 4px var(--primary-color), 0 0 4px var(--primary-color) inset, 0 0 7.5px var(--primary-color), 0 0 5px var(--primary-color) inset, 0 0 10px var(--primary-color)",
          "--boxShadow2": "0 0 .5px var(--primary-color), 0 0 .5px var(--primary-color) inset, 0 0 2px var(--primary-color), 0 0 2px var(--primary-color) inset, 0 0 3.75px var(--primary-color), 0 0 2.5px var(--primary-color) inset, 0 0 5px var(--primary-color)",
          "--dropshadow1": "var(--darkBG-dropshadow1)",
          "--dropshadow2": "var(--darkBG-dropshadow2)",
          "--dropshadow3": "var(--darkBG-dropshadow3)",
          "--complex-box-shadow": "var(--darkBG-complex-box-shadow)",
          "--smalllogodropshadow": "drop-shadow(0 0 6px var(--primary-color)) drop-shadow(0 0 8px var(--primary-color)) drop-shadow(0 3px 12px var(--primary-color))",
          "--largelogodropshadow": "drop-shadow(0 0 10px var(--primary-color)) drop-shadow(0 0 14px var(--primary-color)) drop-shadow(0 5px 14px var(--primary-color))",
          "--dynamicIconBorder": "var(--darkBG-dynamicIconBorder)",
          "--dynamicIconBG": "var(--darkBG-dynamicIconBG)",
          "--dynamicIconHover": "var(--darkBG-dynamicIconHover)",
          "--dynamicButtonHover": "var(--darkBG-dynamicButtonHover)",
          "--icon-border-color": "var(--darkBG-icon-border-color)",
          "--icon-bg-color": "var(--darkBG-icon-bg-color)",
          "--button-bg-color": "var(--darkBG-button-bg-color)",
          "--button-hover-bg": "var(--darkBG-button-hover-bg)",
          "--button-border": "var(--darkBG-button-border)",
        };

    // Apply all theme variables
    Object.keys(themeVariables).forEach((key) => {
      document.documentElement.style.setProperty(key, themeVariables[key]);
    });
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

export default ThemeProvider;
