// ServiceBox.js
import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../themeComponents/Icon/Icon";
import Box from "../../../themeComponents/Box/Box";
import "./service-box.css";

const ServiceBox = ({ icon, title, description, href, index }) => {
  console.log(`Rendering ServiceBox at index ${index}`);
  return (
    <Box
      className="service-box square-box flex column justify-center item-align-center text-center"
      href={href}
      staggeredAnimation={true} // Enable staggered animation
      index={index} // Pass index for staggered delay
      delayBase={index * 50} // Set a base delay for staggered effect
    >
      <Icon
        icon={icon}
        size="lg"
        className="styled-icon dynamic-border-effect hover-scale"
      />
      <h3 className="smaller-top-space smaller-bottom-space">{title}</h3>
      <p className="p-xSmall">{description}</p>
    </Box>
  );
};

ServiceBox.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired, // Ensure each box gets a unique index
};

export default ServiceBox;
