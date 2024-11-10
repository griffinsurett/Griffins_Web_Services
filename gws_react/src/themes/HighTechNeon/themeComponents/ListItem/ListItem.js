// ListItem.js
import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon"; // Adjust the path as necessary
// import IntersectionObserverComponent from "../../ScrollAnimations";

const ListItem = ({
  hasIcon = false,
  icon,
  title,
  description,
  href,
  className,
  titleClasses,
  titleTag: TitleTag = "h3", // Default to 'h3' if not provided
  iconPadding, // Add iconPadding prop
}) => {
  const ListItemContent = (
    <div className={`${className} list-item flex`}>
          {/* <IntersectionObserverComponent inViewClass="fade-in" outViewClass="fade-out"> */}
      {hasIcon && icon && (
        <Icon
          icon={icon}
          size="sm"
          className="styled-icon dynamic-border-effect hover-scale"
          iconPadding={iconPadding} // Pass iconPadding to Icon component
        />
      )}
      <div
        className={`list-item-content ${
          hasIcon ? "smaller-left-space" : ""
        } flex column`}
      >
        <TitleTag className={titleClasses}>{title}</TitleTag>
        {description && <p className="p-xSmall">{description}</p>}
      </div>
      {/* </IntersectionObserverComponent> */}
    </div>
  );

  return href ? (
    <a href={href} className="list-item-link">
      {ListItemContent}
    </a>
  ) : (
    ListItemContent
  );
};

ListItem.propTypes = {
  hasIcon: PropTypes.bool,
  icon: PropTypes.object, // FontAwesomeIcon or similar icon
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  titleClasses: PropTypes.string,
  titleTag: PropTypes.string, // Prop type for the title tag
  iconPadding: PropTypes.string, // Add prop type for iconPadding
};

export default ListItem;
