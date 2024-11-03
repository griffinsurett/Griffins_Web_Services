// AboutList.js
import React from "react";
// import ContentTemplate from "../../../../themeComponents/ContentTemplate/ContentTemplate";
// import "../../../styled-circle.css";
// import Section from "../../../themeComponents/Section/Section"; // Import your Section component
import ListItem from "../../../../themeComponents/ListItem/ListItem";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ContentTemplate from "../../../../themeComponents/ContentTemplate/ContentTemplate";

const About = () => {
  const listItems = [
    {
      title: 'Clear Communication, Limited "Tech Talk"',
      icon: faCode,
    },
    {
      title: "Customized Solutions That Fit Your Needs",
      icon: faCode,
    },
    {
      title: "Transparency and Honesty",
      icon: faCode,
        },
    // Add more items here as needed
  ];

  return (
    <>
      <ContentTemplate
      contentWrapClass={"column text-left top-space responsive-center margin-center"}
      ifParagraph={true}
      ifButton={true}
      buttonBottom={true}
      title="Why Choose Us"
      paragraph1={
        "Griffin's Web Services is Your Jersey Shore-based Digital Powerhouse."
      } 
      paragraphClass={'bottom-space'}
      buttonSecClass={"text-left responsive-center"}
      >
        <div className="about-icon-list flex justify-center item-align-start right-space justify-center column">
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              hasIcon={true}
              icon={item.icon}
              title={item.title}
              titleTag="h6"
              iconPadding={"16px"}
              //   description={item.description}
              className="custom-icon-list-item-class item-align-center text-left top-space bottom-space w80"
            />
          ))}
        </div>
      </ContentTemplate>
    </>
  );
};

export default About;
