// AboutList.js
import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../../../themeComponents/ListItem/ListItem";
import ContentTemplate from "../../../../themeComponents/ContentTemplate/ContentTemplate";
import { faCode } from "@fortawesome/free-solid-svg-icons"; // Fallback icon if not provided

const AboutList = ({ items }) => {
  return (
    <ContentTemplate
      contentWrapClass={"column text-left top-space responsive-center margin-center"}
      ifParagraph={true}
      ifButton={true}
      buttonBottom={true}
      title="Why Choose Us"
      paragraph1={"Griffin's Web Services is Your Jersey Shore-based Digital Powerhouse."}
      paragraphClass={"bottom-space"}
      buttonSecClass={"text-left responsive-center"}
    >
      <div className="about-icon-list flex justify-center item-align-start right-space justify-center column">
        {items.map((item, index) => (
          <ListItem
            key={index}
            hasIcon={true}
            icon={item.icon || faCode} // Use provided icon or fallback to faCode
            title={item.title}
            titleTag="h6"
            iconPadding={"16px"}
            className="custom-icon-list-item-class item-align-center text-left top-space bottom-space w80"
          />
        ))}
      </div>
    </ContentTemplate>
  );
};

AboutList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.object, // Optional icon
    })
  ).isRequired,
};

export default AboutList;
