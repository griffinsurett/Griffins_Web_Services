// About3 - About.js
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
        "about flex item-align-center justify-center full-height column responsive responsive-center responsive-spacing w80 margin-center"
      }
      shadowClass={"left-shadow bottom"}
    >
      <ContentTemplate
        className={"text-center"}
        ifButton={true}
        ifParagraph={true}
        heading="Who We Are" // Large heading for the section
        title="About Us" // Smaller title for the section
        contentWrapClass="column bottom-space"
        paragraph1={
          "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design."
        }
        paragraph1Class={
          "top-paragraph p-xLarge bottom-space"
        }
        paragraph2={
          "Griffin’s Web Services is a comprehensive digital agency rooted in the vibrant community of the Jersey Shore. We are committed to fostering the online growth of your business, meticulously tailoring our strategies to align with your specific needs and aspirations."
        }
        paragraph2Class={
          "bottom-paragraph self-right negative-top responsive-right"
        }
        textSectionClass="smaller-bottom-space"
        buttonText="Learn More"
        buttonLink="#"
        buttonId="about-header-btn"
        // buttonClass={"self-right"}
        // buttonBottom={true}
        buttonSecClass={"responsive-container top-space item-align-center justify-center"}
        isHero={false} // Since this is a section, not a hero
      >
        <div className="about-info flex">
        <div className="about flex item-align-start">
        <AboutList />
        </div>
        {/* <div className="about-right w40 flex column justify-center item-align-center sticky-section">
        <Logo
          ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big"
          width="460px" // Width is set, and height will be 90% of this
          classname=""
          responsive={true}
          everdarkLogo={true}
        />
      </div> */}
      </div>
      </ContentTemplate>
    </Section>
  );
};

export default About;
