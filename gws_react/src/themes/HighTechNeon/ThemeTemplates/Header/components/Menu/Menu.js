import React, { useState } from 'react';
import './menu.css';
import IntersectionObserverComponent from '../../../../ScrollAnimations';
import Logo from "../../../../themeComponents/Logos/2dLogo/2dLogo";

const Menu = ({ isOpen, toggleMenu }) => {
  // State to track hovered item
  const [hoveredItem, setHoveredItem] = useState(null);

  // Array of menu items
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`menu-container ${isOpen ? 'show' : ''}`}>
      <nav className="menu-content flex justify-center item-align-center container">
        <ul className="menu-list flex column justify-center item-align-start">
          {menuItems.map((item, index) => (
            <IntersectionObserverComponent key={index} inViewClass="fade-in" delayIn={200} outViewClass="fade-out">
              <li 
                className="menu-item"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="menu-item-content flex item-align-center text-shadow-for-dark-hover">
                  {hoveredItem === index && (
                    <Logo
                      ContainerClassName="menu-bullet-logo"
                      width="25px"
                    />
                  )}
                  <a 
                    href={item.href} 
                    className="menu-link"
                    onClick={() => { 
                      toggleMenu(); 
                      console.log(`${item.label} menu item clicked`); 
                    }}
                  >
                    {item.label}
                  </a>
                </div>
              </li>
            </IntersectionObserverComponent>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
