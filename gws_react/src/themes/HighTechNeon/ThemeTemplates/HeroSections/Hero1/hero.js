// Hero1.js
import React from "react";
import "./hero.css";
import Button from "../../../themeComponents/Buttons/Button";
import Logo from "../../../themeComponents/Logos/3dLogo/3dLogo";
import Typewriter from "../../../themeComponents/TextEffects/Typewriter/SimpleTypewriter/SimpleTypewriter";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import IntersectionObserverComponent from "../../../ScrollAnimations";

const Hero1 = () => {
  return (
    <section
      id="hero-section"
      className="flex item-align-center responsive hero-height section-gap"
    >
      <div
        className="hero-left w60 text-left"
      >
        {/* Use ContentTemplate for the hero section content */}
        <ContentTemplate
          isHero={true} // Ensure h1 is used for hero
          ifParagraph={true}
          contentWrapClass="column"
          title="Griffin’s Web Services"
          heading="Websites and All Things Digital."
          paragraph1="Your premier one-stop shop for website design and development, expert social media and digital marketing, and creative graphic design services."
          ifButton={true}
          buttonBottom={true}
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
      <IntersectionObserverComponent className="hero-right w40 flex column justify-center item-align-center">
        <IntersectionObserverComponent
          inViewClass="fade-in"
          delayIn={1000}
          applyDelayOnce={true}
        >
          <Logo
            ContainerClassName="flex justify-center item-align-center logo logo-drop-shadow-big sticky-section"
            width="460px"
            classname=""
            responsive={true}
            everdarkLogo={true}
          />
        </IntersectionObserverComponent>
      </IntersectionObserverComponent>
    </section>
  );
};

export default Hero1;
