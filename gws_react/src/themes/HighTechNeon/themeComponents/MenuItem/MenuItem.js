// MenuItem.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import IntersectionObserverComponent from "../../ScrollAnimations";
import Logo from "../Logos/2dLogo/2dLogo";
import "./menu-item.css"; // Separate CSS for MenuItem-specific styles

const MenuItem = ({ label, href, index, toggleMenu, className }) => {
  const [hovered, setHovered] = useState(false);

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
            <Logo ContainerClassName="menu-bullet-logo spin-in" width="25px" />
          )}
          <a
            href={href}
            className="menu-link"
            onClick={() => {
              toggleMenu();
              console.log(`${label} menu item clicked`);
            }}
          >
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
  className: PropTypes.string, // New prop for custom className
};

MenuItem.defaultProps = {
  className: "", // Default to no additional class
};

export default MenuItem;
