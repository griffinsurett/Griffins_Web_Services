// Menu.js
import React from 'react';
import './menu.css';
import IntersectionObserverComponent from '../../../../ScrollAnimations';

const Menu = ({ isOpen, toggleMenu }) => {
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

      {/* Content section with menu items */}
      <nav className="menu-content flex justify-center item-align-center container">
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <IntersectionObserverComponent key={index} inViewClass="fade-in" delayIn={200} outViewClass="fade-out">
              <li className="menu-item">
                <a 
                  href={item.href} 
                  className='text-shadow-for-dark-hover'
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
