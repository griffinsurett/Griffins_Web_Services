// Hamburger.js
import React from 'react';
import './hamburger.css';

const Hamburger = ({ isMenuOpen, toggleMenu }) => {
    return (
        <div className="menu">
            <input
                type="checkbox"
                id="hamburger-toggle"
                className="hamburger-toggle"
                hidden
                checked={isMenuOpen} // Sync checkbox with menu state
                onChange={toggleMenu} // Call toggleMenu on change
            />
            <label htmlFor="hamburger-toggle" className="hamburger-menu">
                <span className="line big"></span>
                <span className="line little"></span>
                <span className="line big"></span>
            </label>
        </div>
    );
};

export default Hamburger;
