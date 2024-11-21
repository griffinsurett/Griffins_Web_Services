// MenuItem.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import IntersectionObserverComponent from "../../ScrollAnimations";
import ListBulletLogo from "../ListBulletImage/ListBulletLogo"; // Import ListBulletLogo
import "./menu-item.css";

const MenuItem = ({ label, href, index, toggleMenu, className }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.querySelector(href); // Find the target element by `id`
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align the top of the section
      });
    }
    toggleMenu(); // Close the menu
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
        className={`menu-item text-shadow-for-dark-hover ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="menu-item-content flex item-align-center">
          {hovered && (
            <ListBulletLogo/>
          )}
          <a href={href} className="menu-link" onClick={handleClick}>
            {label}
          </a>
        </div>
      </li>
    </IntersectionObserverComponent>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  className: PropTypes.string,
};

MenuItem.defaultProps = {
  className: "",
};

export default MenuItem;
