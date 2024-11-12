import React, { useState } from 'react';
import './menu.css';
import IntersectionObserverComponent from '../../../../ScrollAnimations';
import Logo from "../../../../themeComponents/Logos/2dLogo/2dLogo";
import StaggeredAnimation from '../../../../StaggeredAnimation';

const Menu = ({ isOpen, toggleMenu }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

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
            <StaggeredAnimation key={index} index={index} delayBase={100}>
              <IntersectionObserverComponent inViewClass="fade-in" outViewClass="fade-out">
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
            </StaggeredAnimation>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
