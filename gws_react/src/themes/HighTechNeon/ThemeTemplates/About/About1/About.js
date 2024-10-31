// About1 - About.js
import React from "react";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate"; 
import "./about.css";
import "../../../styled-circle.css";
import Section from "../../../themeComponents/Section/Section"; // Import your Section component

const About = () => {
  return (
    <Section
      id='about'
      className={
        "about flex item-align-center justify-center full-height column responsive responsive-center responsive-spacing"
      }
      shadowClass={"left-shadow bottom"}
    >
      <ContentTemplate
        ifButton={true}
        ifParagraph={true}
        heading="Who We Are" // Large heading for the section
        title="About Us" // Smaller title for the section
        paragraphClass={
          "flex justify-center column about-paragraphs responsive-center"
        }
        paragraph1={
          "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design."
        }
        paragraph1Class={
          "top-paragraph p-xLarge bottom-space text-left half-column self-left"
        }
        paragraph2={
          "Griffin’s Web Services is a comprehensive digital agency rooted in the vibrant community of the Jersey Shore. We are committed to fostering the online growth of your business, meticulously tailoring our strategies to align with your specific needs and aspirations."
        }
        paragraph2Class={
          "bottom-paragraph text-left p-medium half-column self-right negative-top responsive-right"
        }
        textSectionClass='smaller-bottom-space'
        buttonText="Learn More"
        buttonLink="#"
        buttonId="about-header-btn"
        buttonClass={"self-right"}
        buttonBottom={true} // Ensures the button appears below the paragraphs
        buttonSecClass={"half-column self-right responsive-container top-space"}
        isHero={false} // Since this is a section, not a hero
        className={"column"}
      />
    </Section>
  );
};

export default About;
