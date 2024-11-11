// About5 - About.js
import React from "react";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../themeComponents/Section/Section"; // Import your Section component
import AboutList from "./AboutList/AboutList";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";
import IntersectionObserverComponent from "../../../ScrollAnimations";

const About = () => {
  return (
    <Section
      id="about"
      className={
        "about flex item-align-start justify-between-section full-height responsive responsive-center responsive-spacing margin-center box-gap"
      }
      shadowClass={"left-shadow bottom"}
    >
      <div className="about-right flex column justify-center item-align-center sticky-section w40">
      <IntersectionObserverComponent inViewClass="fade-in" delayIn={1000} applyDelayOnce={true}>
        <Logo
          ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big"
          width="460px"
          classname=""
          responsive={true}
          everdarkLogo={true}
        />
        </IntersectionObserverComponent>
      </div>

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
        paragraph1Class={"top-paragraph p-medium bottom-space"}
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
    </Section>
  );
};

export default About;
