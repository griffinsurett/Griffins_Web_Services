// social-icons.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { getCollection } from "../../../../CMS/Utils/GetCollection"; // Adjust the path
import "./social-icons.css";

// Map platform names to FontAwesome icons
const iconMapping = {
  faFacebook: faFacebook,
  faTwitter: faTwitter,
  faInstagram: faInstagram,
  faLinkedin: faLinkedin,
};

const SocialIcons = () => {
  const contactCollection = getCollection("contact");

  if (!contactCollection || !contactCollection.socialMedia) {
    console.error("Error: Social media links not found in contact collection.");
    return null;
  }

  return (
    <div className="social-icons space">
      <div className="social-icon flex justify-between">
        {contactCollection.socialMedia.map((socialMedia) => (
          <a
            key={socialMedia.platform}
            href={socialMedia.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialMedia.platform}
            className="hover-scale"
          >
            <FontAwesomeIcon
              icon={iconMapping[socialMedia.icon]}
              size="lg"
              className=""
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
