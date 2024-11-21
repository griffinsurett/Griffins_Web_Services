// ListBulletLogo.js
import React from "react";
import PropTypes from "prop-types";
import "./list-bullet-logo.css"; 
import Logo from "../Logos/2dLogo/2dLogo"; // Import 2dLogo

const ListBulletLogo = ({ width, height, className }) => {
  return (
    <Logo
      ContainerClassName="spin-in"
      className={`list-bullet-logo ${className}`}
      style={{ width, height }}
      width={width}
      height={height}
    />
  );
};

ListBulletLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};

ListBulletLogo.defaultProps = {
  width: "24px",
  height: "24px",
  className: "",
};

export default ListBulletLogo;
