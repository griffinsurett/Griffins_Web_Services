// PrimaryColorChanger.js
import React, { useState, useRef } from "react";
import CircleCheckbox from "../../themeComponents/CircleCheckbox/circle-checkbox";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeContext"; // Import ThemeContext
import "./primary-color-changer.css";

const PrimaryColorChanger = () => {
  const { darkPrimaryColor, changeDarkPrimaryColor } = useTheme(); // Access color and updater function from context
  const defaultColor = "#5e76f6"; // Default color
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const modalRef = useRef(null);

  // Define colors independently from the selected color
  const colors = [
    "#F5004F", "#7C00FE", "#FF5F1F", "#FFAF00", "#39ff14",
    "#01dada", "#FF0000", "#ff13f0", "#0096FF", "#8e0fed",
  ]; // Array of colors excluding the default

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setShowColorPicker(!isChecked);
  };

  const handleColorChange = (color) => {
    changeDarkPrimaryColor(color); // Update color via context
    setShowColorPicker(false); // Close the modal after selecting a color
    setIsChecked(false); // Uncheck the checkbox
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowColorPicker(false);
      setIsChecked(false);
    }
  };

  // Handle closing color picker when clicking outside
  React.useEffect(() => {
    if (showColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColorPicker]);

  return (
    <div className="primary-color-changer" ref={modalRef}>
      <CircleCheckbox
        id="colorCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        iconChecked={faDroplet}
        iconUnchecked={faDroplet}
        // Set icon color to CSS variable for primary color
        iconColor={`var(--darkBG-primary-color)`}
        // Add inline style to bind to CSS variable
        style={{ color: `var(--darkBG-primary-color)` }}
      />
      {showColorPicker && (
        <div className="color-picker-modal">
          {/* Display the default color button */}
          <button
            className={`color-button ${
              darkPrimaryColor === defaultColor ? "current-color" : ""
            }`}
            style={{ backgroundColor: defaultColor }}
            onClick={() => handleColorChange(defaultColor)}
          ></button>
          {/* Display the other colors */}
          {colors.map((color, index) => (
            <button
              key={index}
              className={`color-button ${
                color === darkPrimaryColor ? "current-color" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrimaryColorChanger;
