import React from "react";
import { getSiteSettings } from "../../../CMS/Utils/GetSettings";

const Footer = () => {
  const siteSettings = getSiteSettings();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>{siteSettings.Copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
