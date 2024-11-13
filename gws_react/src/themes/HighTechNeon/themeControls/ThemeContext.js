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

  // Update or create meta tag for theme color
  const setThemeColorMetaTag = (color) => {
    let themeMetaTag = document.querySelector("meta[name='theme-color']");
    if (themeMetaTag) {
      themeMetaTag.setAttribute("content", color);
    } else {
      themeMetaTag = document.createElement("meta");
      themeMetaTag.name = "theme-color";
      themeMetaTag.content = color;
      document.head.appendChild(themeMetaTag);
    }
  };

  // Apply theme properties
  const applyTheme = (lightMode) => {
    const theme = lightMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);

    const backgroundColor = lightMode
      ? "var(--lightBG-background-color)"
      : "var(--darkBG-background-color)";

    // Set background color and update meta theme-color
    document.documentElement.style.setProperty("--background-color", backgroundColor);
    const computedBgColor = getComputedStyle(document.documentElement).getPropertyValue(backgroundColor).trim();
    setThemeColorMetaTag(computedBgColor);

    if (lightMode) {
      // Light Mode Theme Properties
      document.documentElement.style.setProperty("--primary-color", "var(--lightBG-primary-color)");
      document.documentElement.style.setProperty("--maintext-color", "var(--lightBG-maintext-color)");
      document.documentElement.style.setProperty("--secondary-bg", "var(--lightBG-secondary-bg)");
      document.documentElement.style.setProperty("--transparentFade-bg", "var(--lightBG-transparentFade-bg)");
      document.documentElement.style.setProperty("--transparentFade-bg1", "var(--lightBG-transparentFade-bg1)");
      document.documentElement.style.setProperty("--transparentFade-bg2", "var(--lightBG-transparentFade-bg2)");
      document.documentElement.style.setProperty("--dynamicIconBorder", "var(--lightBG-dynamicIconBorder)");
      document.documentElement.style.setProperty("--dynamicIconBG", "var(--lightBG-dynamicIconBG)");
      document.documentElement.style.setProperty("--dynamicButtonHover", "var(--lightBG-dynamicButtonHover)");
      document.documentElement.style.setProperty("--dynamicIconHover", "var(--lightBG-dynamicIconHover)");
      document.documentElement.style.setProperty("--complex-box-shadow", "var(--lightBG-complex-box-shadow)");
      document.documentElement.style.setProperty("--dropshadow1", "var(--lightBG-dropshadow1)");
      document.documentElement.style.setProperty("--dropshadow2", "var(--lightBG-dropshadow2)");
      document.documentElement.style.setProperty("--dropshadow3", "var(--lightBG-dropshadow3)");
      document.documentElement.style.setProperty("--boxShadow1", "var(--lightBG-boxShadow1)");
      document.documentElement.style.setProperty("--boxShadow2", "var(--lightBG-boxShadow2)");
      document.documentElement.style.setProperty("--boxShadow3", "var(--lightBG-boxShadow3)");
      document.documentElement.style.setProperty("--text-shadow", "var(--lightBG-textShadow1)");
      document.documentElement.style.setProperty("--smalllogodropshadow", "var(--lightBG-smalllogodropshadow)");
      document.documentElement.style.setProperty("--largelogodropshadow", "var(--lightBG-largelogodropshadow)");

      // Additional Light Mode Properties for Icons and Buttons
      document.documentElement.style.setProperty("--icon-border-color", "var(--lightBG-icon-border-color)");
      document.documentElement.style.setProperty("--icon-bg-color", "var(--lightBG-icon-bg-color)");
      document.documentElement.style.setProperty("--button-bg-color", "var(--lightBG-button-bg-color)");
      document.documentElement.style.setProperty("--button-hover-bg", "var(--lightBG-button-hover-bg)");
      document.documentElement.style.setProperty("--button-border", "var(--lightBG-button-border)");

    } else {
      // Dark Mode Theme Properties
      document.documentElement.style.setProperty("--primary-color", "var(--darkBG-primary-color)");
      document.documentElement.style.setProperty("--maintext-color", "var(--darkBG-maintext-color)");
      document.documentElement.style.setProperty("--secondary-bg", "var(--darkBG-secondary-bg)");
      document.documentElement.style.setProperty("--transparentFade-bg", "var(--darkBG-transparentFade-bg)");
      document.documentElement.style.setProperty("--transparentFade-bg1", "var(--darkBG-transparentFade-bg1)");
      document.documentElement.style.setProperty("--transparentFade-bg2", "var(--darkBG-transparentFade-bg2)");
      document.documentElement.style.setProperty("--text-shadow", "var(--darkBG-textShadow1)");
      document.documentElement.style.setProperty("--boxShadow", "0 0 2px var(--primary-color), 0 0 2px var(--primary-color) inset, 0 0 8px var(--primary-color), 0 0 8px var(--primary-color) inset, 0 0 15px var(--primary-color), 0 0 10px var(--primary-color) inset, 0 0 20px var(--primary-color)");
      document.documentElement.style.setProperty("--boxShadow1", "0 0 1px var(--primary-color), 0 0 1px var(--primary-color) inset, 0 0 4px var(--primary-color), 0 0 4px var(--primary-color) inset, 0 0 7.5px var(--primary-color), 0 0 5px var(--primary-color) inset, 0 0 10px var(--primary-color)");
      document.documentElement.style.setProperty("--boxShadow2", "0 0 .5px var(--primary-color), 0 0 .5px var(--primary-color) inset, 0 0 2px var(--primary-color), 0 0 2px var(--primary-color) inset, 0 0 3.75px var(--primary-color), 0 0 2.5px var(--primary-color) inset, 0 0 5px var(--primary-color)");
      document.documentElement.style.setProperty("--dropshadow1", "var(--darkBG-dropshadow1)");
      document.documentElement.style.setProperty("--dropshadow2", "var(--darkBG-dropshadow2)");
      document.documentElement.style.setProperty("--dropshadow3", "var(--darkBG-dropshadow3)");
      document.documentElement.style.setProperty("--complex-box-shadow", "var(--darkBG-complex-box-shadow)");
      document.documentElement.style.setProperty("--smalllogodropshadow", "drop-shadow(0 0 6px var(--primary-color)) drop-shadow(0 0 8px var(--primary-color)) drop-shadow(0 3px 12px var(--primary-color))");
      document.documentElement.style.setProperty("--largelogodropshadow", "drop-shadow(0 0 10px var(--primary-color)) drop-shadow(0 0 14px var(--primary-color)) drop-shadow(0 5px 14px var(--primary-color))");

      // Additional Dark Mode Properties for Icons and Buttons
      document.documentElement.style.setProperty("--icon-border-color", "var(--darkBG-icon-border-color)");
      document.documentElement.style.setProperty("--icon-bg-color", "var(--darkBG-icon-bg-color)");
      document.documentElement.style.setProperty("--button-bg-color", "var(--darkBG-button-bg-color)");
      document.documentElement.style.setProperty("--button-hover-bg", "var(--darkBG-button-hover-bg)");
      document.documentElement.style.setProperty("--button-border", "var(--darkBG-button-border)");
    }
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
