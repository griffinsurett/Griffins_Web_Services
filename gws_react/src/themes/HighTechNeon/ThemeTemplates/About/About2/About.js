// About.js - about.2
import React from "react";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate"; // Updated import to ContentTemplate
import "./about.css";
import Section from "../../../themeComponents/Section/Section";

const About = () => {
  return (
    <Section
      className={"flex justify-center full-height"}
      shadowClass={"right-shadow bottom"}
    >
        <ContentTemplate
          ifButton={true}
          ifParagraph={true}
          heading="Who We Are" // Large heading
          title="About Us" // Smaller title
          paragraphClass={
            "flex justify-center column about-paragraphs morethan-half-container"
          }
          paragraph1={
            "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design."
          }
          paragraph1Class={"top-paragraph p-large bottom-space"}
          paragraph2={
            "Griffin’s Web Services is a comprehensive digital agency rooted in the vibrant community of the Jersey Shore. We are committed to fostering the online growth of your business, meticulously tailoring our strategies to align with your specific needs and aspirations."
          }
          paragraph2Class={"bottom-paragraph responsive-spacing"}
          buttonText="Learn More"
          buttonLink="#"
          buttonId="about-header-btn"
          buttonBottom={true}
          buttonClass={"responsive-spacing"}
          className={"morethan-half-container bottom-space justify-center item-align-center column text-center"}
        />
    </Section>
  );
};

export default About;
