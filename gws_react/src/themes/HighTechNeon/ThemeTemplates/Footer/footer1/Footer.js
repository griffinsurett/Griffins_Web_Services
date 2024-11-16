// Footer.js
import React from "react";
import "./footer.css";
import SocialIcons from "../../../themeComponents/social-icons/SocialIcons";
import { getSiteSettings } from "../../../../../CMS/Utils/GetSettings";

const logo = `${process.env.PUBLIC_URL}/mylogo3d.png`;

const Footer = ({ className }) => {
  const siteSettings = getSiteSettings();

  if (!siteSettings) {
    return <div>Error: Site settings not found</div>;
  }

  return (
    <footer className={`footer ${className} flex justify-center`}>
      <div className="header-foot-container flex justify-between item-align-center responsive">
        <SocialIcons />

        <div
          className="flex justify-center item-align-center p-small"
          id="footer-copyright"
        >
          {siteSettings.Copyright}
        </div>

        <div className="flex justify-center item-align-center">
          <ul className="footer-menu flex justify-between p-small">
            <li className="hover-scale">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="hover-scale">
              <a href="/">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
