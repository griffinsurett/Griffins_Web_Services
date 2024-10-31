// Menu.js
import React from 'react';
import './menu.css';

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`menu-overlay ${isOpen ? 'show' : ''} flex justify-center item-align-center column`}>
      <nav className="menu">
        <ul>
          <li><a href="#home" onClick={() => { toggleMenu(); console.log('Menu item clicked'); }}>Home</a></li>
          <li><a href="#about" onClick={() => { toggleMenu(); console.log('Menu item clicked'); }}>About</a></li>
          <li><a href="#services" onClick={() => { toggleMenu(); console.log('Menu item clicked'); }}>Services</a></li>
          <li><a href="#contact" onClick={() => { toggleMenu(); console.log('Menu item clicked'); }}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
