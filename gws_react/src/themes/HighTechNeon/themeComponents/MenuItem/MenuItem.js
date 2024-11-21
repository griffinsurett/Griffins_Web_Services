// MenuItem.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import IntersectionObserverComponent from "../../ScrollAnimations";
import ListBulletLogo from "../ListBulletImage/ListBulletLogo"; // Import ListBulletLogo
import "./menu-item.css";

const MenuItem = ({ label, href, index, toggleMenu, className, logoOnlyOnHover }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = href ? document.querySelector(href) : null; // Find the target element by `id`
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align the top of the section
      });
    }
    if (toggleMenu) toggleMenu(); // Close the menu if toggleMenu is provided
  };

  return (
    <IntersectionObserverComponent
      inViewClass="fade-in"
      outViewClass="fade-out"
      staggeredAnimation={true}
      index={index}
      delayBase={100}
    >
      <li
        className={`menu-item ${href ? "text-shadow-for-dark-hover" : ""} ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="menu-item-content flex item-align-center">
          {/* Conditionally show logo based on hover or always */}
          {(logoOnlyOnHover ? hovered : true) && <ListBulletLogo />}
          {href ? (
            <a href={href} className="menu-link" onClick={handleClick}>
              {label}
            </a>
          ) : (
            <span className="menu-text">{label}</span>
          )}
        </div>
      </li>
    </IntersectionObserverComponent>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  index: PropTypes.number.isRequired,
  toggleMenu: PropTypes.func,
  className: PropTypes.string,
  logoOnlyOnHover: PropTypes.bool, // New prop
};

MenuItem.defaultProps = {
  className: "",
  href: null,
  toggleMenu: null,
  logoOnlyOnHover: false, // Default to show logo always
};

export default MenuItem;
