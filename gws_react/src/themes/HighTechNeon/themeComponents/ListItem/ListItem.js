// iconListItem.js
import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon"; // Adjust the path as necessary

const ListItem = ({ hasIcon = false, icon, title, description, href, className }) => {
  return (
    <div className={`${className} list-item flex text-left`} href={href}>
      {hasIcon && icon && (
        <Icon
          icon={icon}
          size="sm"
          className="styled-icon dynamic-border-effect hover-scale"
        />
      )}
      <div className={`list-item-content ${hasIcon ? "smaller-left-space" : ""} flex column top-space`}>
        <h3>{title}</h3>
        <p className="p-small smaller-top-space">{description}</p>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  hasIcon: PropTypes.bool,
  icon: PropTypes.object, // FontAwesomeIcon or similar icon
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default ListItem;
