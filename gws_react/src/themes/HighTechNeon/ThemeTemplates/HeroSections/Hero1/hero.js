// Hero1.js
import React from "react";
import "./hero.css";
import Button from "../../../themeComponents/Buttons/Button";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";
import Typewriter from "../../../themeComponents/TextEffects/Typewriter/SimpleTypewriter/SimpleTypewriter";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import VisibilitySensor from "../../../themeControls/VisibilitySensor/VisibilitySensor";

const Hero1 = () => {
  return (
    <section
      id="hero-section"
      className="flex item-align-center responsive hero-height section-gap"
    >
      <div className="hero-left w60 text-left">
        <ContentTemplate
          isHero={true}
          ifParagraph={true}
          contentWrapClass="column"
          title="Griffin’s Web Services"
          heading="Websites and All Things Digital."
          paragraph1="Your premier one-stop shop for website design and development, expert social media and digital marketing, and creative graphic design services."
          ifButton={true}
          buttonText="Get Started"
          buttonLink="#"
          className="hero-content"
          headingClass="text-shadow-for-dark"
          paragraphClass="p-small bottom-space"
          buttonClass="p-small"
          buttonSecClass="hero-btn-container smaller-top-space smaller-bottom-space"
          titleClass="section-title"
        />
      </div>
      <div className="hero-right w40 flex column justify-center item-align-center">
        <VisibilitySensor delay={500}>
          {({ isVisible }) => (
            isVisible && (  
              <Logo
                ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big jump-fade"
                width="460px"
                classname=""
                responsive={true}
                everdarkLogo={true}
              />
            )
          )}
        </VisibilitySensor>
      </div>
    </section>
  );
};

export default Hero1;
