// ServiceBox.js

import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../themeComponents/Icon/Icon"; // Adjust the path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "../../../themeComponents/Box/Box";
import "./service-box.css"; // Assuming you have some CSS for styling

const ServiceBox = ({ icon, title, description, href }) => {
  return (
    <Box
      className="service-box square-box flex column justify-center item-align-center text-center"
      href={href}
    >
      <Icon
        icon={icon}
        size="lg"
        className="styled-icon dynamic-border-effect hover-scale"
      />
      <br />
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
};

export default ServiceBox;
