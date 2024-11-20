// ServiceBox.js
import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../themeComponents/Icon/Icon";
import Box from "../../../themeComponents/Box/Box";
import "./service-box.css";

const ServiceBox = ({ icon, title, description, href, index }) => {
  return (
    <Box
      className="service-box flex item-align-center justify-center column text-center"
      href={href}
      staggeredAnimation={true}
      index={index}
      delayBase={index * 50}
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
  href: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default ServiceBox;
