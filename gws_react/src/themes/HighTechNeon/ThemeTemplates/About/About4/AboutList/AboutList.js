// AboutList.js
import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../../../themeComponents/ListItem/ListItem";
import IntersectionObserverComponent from "../../../../ScrollAnimations";
import { faCode } from "@fortawesome/free-solid-svg-icons"; // Fallback icon if not provided

const AboutList = ({ items }) => {
  return (
    <div className="about-icon-list flex justify-center item-align-start wrap">
      {items.map((item, index) => (
        <IntersectionObserverComponent 
          key={index} 
          inViewClass="fade-in" 
          outViewClass="fade-out" 
          staggeredAnimation={true}
          delayIn={200}
          className={"w50 bottom-space"}
        >
          <ListItem
            hasIcon={true}
            icon={item.icon || faCode} // Use provided icon or fallback to faCode
            title={item.title}
            titleTag="h6"
            iconPadding="17px"
            description={item.description}
            className="custom-icon-list-item-class text-left"
          />
        </IntersectionObserverComponent>
      ))}
    </div>
  );
};

AboutList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object, // Optional icon
    })
  ).isRequired,
};

export default AboutList;
