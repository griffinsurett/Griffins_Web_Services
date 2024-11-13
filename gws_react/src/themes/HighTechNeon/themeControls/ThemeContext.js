// ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { setCookie, getCookie } from "../../../components/cookies/cookies";

// Create the Theme Context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedMode = getCookie("theme");
    return savedMode ? savedMode === "light" : false; // Default to dark mode
  });

  // Function to update or create the theme-color meta tag
  const updateMetaThemeColor = (color) => {
    let themeMetaTag = document.querySelector("meta[name='theme-color']");
    if (!themeMetaTag) {
      themeMetaTag = document.createElement("meta");
      themeMetaTag.name = "theme-color";
      document.head.appendChild(themeMetaTag);
    }
    themeMetaTag.setAttribute("content", color);
  };

  // Function to apply theme variables and update theme-color
  const applyTheme = (lightMode) => {
    const backgroundColor = lightMode ? "#efefef" : "#0e0e0e";
    updateMetaThemeColor(backgroundColor);

    document.documentElement.setAttribute("data-theme", lightMode ? "light" : "dark");
    
    // Set CSS variables for the theme
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      lightMode ? "var(--lightBG-primary-color)" : "var(--darkBG-primary-color)"
    );
    document.documentElement.style.setProperty(
      "--maintext-color",
      lightMode ? "var(--lightBG-maintext-color)" : "var(--darkBG-maintext-color)"
    );
    document.documentElement.style.setProperty(
      "--secondary-bg",
      lightMode ? "var(--lightBG-secondary-bg)" : "var(--darkBG-secondary-bg)"
    );
    document.documentElement.style.setProperty(
      "--transparentFade-bg",
      lightMode ? "var(--lightBG-transparentFade-bg)" : "var(--darkBG-transparentFade-bg)"
    );
    document.documentElement.style.setProperty(
      "--transparentFade-bg1",
      lightMode ? "var(--lightBG-transparentFade-bg1)" : "var(--darkBG-transparentFade-bg1)"
    );
    document.documentElement.style.setProperty(
      "--transparentFade-bg2",
      lightMode ? "var(--lightBG-transparentFade-bg2)" : "var(--darkBG-transparentFade-bg2)"
    );
    document.documentElement.style.setProperty(
      "--dynamicIconBorder",
      lightMode ? "var(--lightBG-dynamicIconBorder)" : "var(--darkBG-dynamicIconBorder)"
    );
    document.documentElement.style.setProperty(
      "--dynamicIconBG",
      lightMode ? "var(--lightBG-dynamicIconBG)" : "var(--darkBG-dynamicIconBG)"
    );
    document.documentElement.style.setProperty(
      "--dynamicButtonHover",
      lightMode ? "var(--lightBG-dynamicButtonHover)" : "var(--darkBG-dynamicButtonHover)"
    );
    document.documentElement.style.setProperty(
      "--dynamicIconHover",
      lightMode ? "var(--lightBG-dynamicIconHover)" : "var(--darkBG-dynamicIconHover)"
    );
    document.documentElement.style.setProperty(
      "--complex-box-shadow",
      lightMode ? "var(--lightBG-complex-box-shadow)" : "var(--darkBG-complex-box-shadow)"
    );
    document.documentElement.style.setProperty(
      "--dropshadow1",
      lightMode ? "var(--lightBG-dropshadow1)" : "var(--darkBG-dropshadow1)"
    );
    document.documentElement.style.setProperty(
      "--dropshadow2",
      lightMode ? "var(--lightBG-dropshadow2)" : "var(--darkBG-dropshadow2)"
    );
    document.documentElement.style.setProperty(
      "--dropshadow3",
      lightMode ? "var(--lightBG-dropshadow3)" : "var(--darkBG-dropshadow3)"
    );
    document.documentElement.style.setProperty(
      "--boxShadow1",
      lightMode ? "var(--lightBG-boxShadow1)" : "var(--darkBG-boxShadow1)"
    );
    document.documentElement.style.setProperty(
      "--boxShadow2",
      lightMode ? "var(--lightBG-boxShadow2)" : "var(--darkBG-boxShadow2)"
    );
    document.documentElement.style.setProperty(
      "--boxShadow3",
      lightMode ? "var(--lightBG-boxShadow3)" : "var(--darkBG-boxShadow3)"
    );
    document.documentElement.style.setProperty(
      "--smalllogodropshadow",
      lightMode ? "var(--lightBG-smalllogodropshadow)" : "var(--darkBG-smalllogodropshadow)"
    );
    document.documentElement.style.setProperty(
      "--largelogodropshadow",
      lightMode ? "var(--lightBG-largelogodropshadow)" : "var(--darkBG-largelogodropshadow)"
    );
    document.documentElement.style.setProperty(
      "--text-shadow",
      lightMode ? "var(--lightBG-textShadow1)" : "var(--darkBG-textShadow1)"
    );
    document.documentElement.style.setProperty(
      "--primary-color-rgb",
      lightMode ? "var(--lightBG-primary-color-rgb)" : "var(--darkBG-primary-color-rgb)"
    );
    // Additional CSS variables as required for the theme
  };

  // useEffect to apply theme on mount and when the theme changes
  useEffect(() => {
    applyTheme(isLightMode);
    setCookie("theme", isLightMode ? "light" : "dark", 30); // Save theme in cookies
  }, [isLightMode]);

  // Toggle theme function
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
