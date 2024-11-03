// About5 - About.js
import React from "react";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../themeComponents/Section/Section"; // Import your Section component
import AboutList from "./AboutList/AboutList";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";

const About = () => {
  return (
    <Section
      id="about"
      className={
        "about flex item-align-start justify-between-section full-height responsive responsive-center responsive-spacing margin-center box-gap"
      }
      shadowClass={"left-shadow bottom"}
    >
      <ContentTemplate
        className={"text-left justify-left item-align-start w60"}
        ifButton={true}
        ifParagraph={true}
        heading="Who We Are" // Large heading for the section
        title="About Us" // Smaller title for the section
        contentWrapClass="column bottom-space"
        paragraph1={
          "Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design. Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design."
        }
        paragraph1Class={
          "top-paragraph p-medium bottom-space"
        }
        textSectionClass="smaller-bottom-space"
        buttonText="Learn More"
        buttonLink="#"
        buttonId="about-header-btn"
        // buttonClass={"self-right"}
        buttonSecClass={"responsive-container self-left"}
        isHero={false} // Since this is a section, not a hero
        buttonBottom={true}
      >
          <div className="about flex item-align-start">
        <AboutList />
        </div>
      </ContentTemplate>
        <div className="about-right flex column justify-center item-align-center sticky-section w40">
        <Logo
          ContainerClassName="flex justify-left item-align-start logo logo-drop-shadow-big"
          width="360px" // Width is set, and height will be 90% of this
          classname=""
          responsive={true}
          everdarkLogo={true}
        />
      </div>
    </Section>
  );
};

export default About;
