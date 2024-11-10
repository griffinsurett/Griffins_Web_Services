// Menu.js
import React from 'react';
import './menu.css';
import IntersectionObserverComponent from '../../../../ScrollAnimations';

const Menu = ({ isOpen, toggleMenu }) => {
  // Define an array of menu items with labels and hrefs
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`menu-overlay ${isOpen ? 'show' : ''} flex justify-center item-align-center column`}>
      <nav className="menu">
        <ul>
          {menuItems.map((item, index) => (
          <IntersectionObserverComponent inViewClass="fade-in" outViewClass="fade-out">
            <li key={index}>
              <a 
                href={item.href} 
                onClick={() => { 
                  toggleMenu(); 
                  console.log(`${item.label} menu item clicked`); 
                }}
              >
                {item.label}
              </a>
            </li>
          </IntersectionObserverComponent>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
