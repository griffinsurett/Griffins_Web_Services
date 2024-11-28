import React from "react";
import { Link } from "react-router-dom";
import { getSiteSettings } from "../../../CMS/Utils/GetSettings";

const Header = () => {
  const siteSettings = getSiteSettings();

  return (
    <header className="site-header">
      <div className="container">
        <h1 className="site-title">{siteSettings.siteTitle}</h1>
        <nav className="site-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
