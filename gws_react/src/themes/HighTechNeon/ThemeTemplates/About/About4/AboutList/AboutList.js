// AboutList.js
import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../../../themeComponents/ListItem/ListItem";
import IntersectionObserverComponent from "../../../../ScrollAnimations";

const AboutList = ({ items }) => {
  return (
    <div className="about-icon-list flex responsive justify-between item-align-start w100">
      {items.map((item, index) => (
        <IntersectionObserverComponent 
          key={index} 
          inViewClass="fade-in" 
          outViewClass="fade-out" 
          staggeredAnimation={true}
          delayIn={200}
          className={"flex justify-left bottom-space w30 box-gap"}
        >
          <ListItem
            hasIcon={true}
            icon={item.icon} // Use the provided icon or fallback to faCode
            title={item.title}
            IconTop={true}
            titleTag="h6"
            iconPadding="17px"
            description={item.description}
            className="text-center"
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
      icon: PropTypes.object, // Icon from Content.js
    })
  ).isRequired,
};

export default AboutList;
