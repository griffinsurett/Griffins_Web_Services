// AboutList.js
import React from "react";
// import ContentTemplate from "../../../../themeComponents/ContentTemplate/ContentTemplate";
// import "../../../styled-circle.css";
// import Section from "../../../themeComponents/Section/Section"; // Import your Section component
import ListItem from "../../../../themeComponents/ListItem/ListItem";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ContentTemplate from "../../../../themeComponents/ContentTemplate/ContentTemplate";
import Box from "../../../../themeComponents/Box/Box";
import Icon from "../../../../themeComponents/Icon/Icon";

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
    {
      title: "Results That Drive Your Business Forward",
      icon: faCode,
    },
    {
      title: "Experienced, Friendly Professionals Who Care",
      icon: faCode,
    },
    {
      title: "A Local, Jersey Shore-Based",
      icon: faCode,
    },
    // Add more items here as needed
  ];

  return (
    <>
      <ContentTemplate
        // ifParagraph={true}
        // paragraph1={
        //   "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design."
        // }
        // paragraphClass={'text-left'}
        // paragraph2={
        //     "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design."
        // }
        // paragraph1Class={"smaller-bottom-space"}
        // paragraph2Class={"bottom-space"}
        title={"Why Choose Us"}
        className={"text-center justify-center item-align-center larger-top-space larger-bottom-space"}
      >

        <div className="about-icon-list flex justify-center item-align-center wrap text-center box-gap">
          {listItems.map((item, index) => (
            <Box className={"about-info-box w30 flex column item-align-center justify-center space"}>
           <Icon icon={item.icon} size="md" className="styled-icon dynamic-border-effect" iconPadding="12px" />
           <h6 className="p-small top-space">{item.title}</h6>
            </Box>
          ))}
        </div>
      </ContentTemplate>
    </>
  );
};

export default About;
