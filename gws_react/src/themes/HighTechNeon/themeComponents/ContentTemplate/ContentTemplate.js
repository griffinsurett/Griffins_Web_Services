// ContentTemplate.js
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./content-template.css";
import Button from "../Buttons/Button";
import Typewriter from "../TextEffects/Typewriter/SimpleTypewriter/SimpleTypewriter";
import VisibilitySensor from "../../themeControls/VisibilitySensor/VisibilitySensor"; // Import VisibilitySensor

const ContentTemplate = ({
  title,
  heading,
  ifButton = false,
  buttonText = "Learn More",
  buttonLink = "#",
  onClick,
  className,
  contentWrapClass,
  buttonId,
  titleClass,
  headingClass,
  paragraphClass,
  paragraph1,
  paragraph2,
  paragraph1Class,
  paragraph2Class,
  textSectionClass,
  sideContentClass,
  ifParagraph = false,
  buttonBottom = false,
  buttonBottomMobile = false,
  buttonClass,
  buttonSecClass,
  children,
  isHero = false,
  paragraphSide = true,
  buttonSide = true,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showSideContentContainer = paragraphSide || (buttonSide && ifButton && !buttonBottom);

  return (
    <div className={`content-template ${className} flex column`}>
      <div className={`content-top-section flex ${contentWrapClass}`}>
        <VisibilitySensor oneTime={true}>
          {({ isVisible }) => (
            <div className={`title-heading-container column ${textSectionClass}`}>
              {title && (
                <h5
                  className={`content-title smaller-bottom-space ${titleClass} ${
                    isVisible ? "fade-in-up" : "fade-out-down"
                  }`}
                >
                  <Typewriter text={title} speed={100} />
                </h5>
              )}
              {heading &&
                (isHero ? (
                  <h1
                    className={`bold ${headingClass} text-shadow-for-dark ${
                      isVisible ? "fade-in-up" : "fade-out-down"
                    }`}
                  >
                    {heading}
                  </h1>
                ) : (
                  <h2
                    className={`bold ${headingClass} text-shadow-for-dark ${
                      isVisible ? "fade-in-up" : "fade-out-down"
                    }`}
                  >
                    {heading}
                  </h2>
                ))}

              {ifParagraph && !paragraphSide && (
                <div
                  className={`content-template-paragraphs ${paragraphClass} ${
                    isVisible ? "fade-in-up" : "fade-out-down"
                  }`}
                >
                  {paragraph1 && (
                    <p className={paragraph1Class}>
                      {paragraph1}
                    </p>
                  )}
                  {paragraph2 && (
                    <p className={paragraph2Class}>
                      {paragraph2}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </VisibilitySensor>

        {showSideContentContainer && (
          <VisibilitySensor>
            {({ isVisible }) => (
              <div
                className={`side-content-container ${sideContentClass} flex column justify-center ${
                  isVisible ? "fade-in-up" : "fade-out-down"
                }`}
              >
                {paragraphSide && ifParagraph && (
                  <div className={`content-template-paragraphs-side ${paragraphClass}`}>
                    {paragraph1 && (
                      <p className={paragraph1Class}>
                        {paragraph1}
                      </p>
                    )}
                    {paragraph2 && (
                      <p className={paragraph2Class}>
                        {paragraph2}
                      </p>
                    )}
                  </div>
                )}

                {buttonSide && ifButton && !buttonBottom && (!isMobile || !buttonBottomMobile) && (
                  <div className={`${buttonSecClass} content-template-btn responsive-spacing flex item-align-center`}>
                    <Button
                      text={buttonText}
                      buttonLink={buttonLink}
                      className={`p-small ${buttonClass}`}
                      buttonId={buttonId}
                      onClick={onClick}
                    />
                  </div>
                )}
              </div>
            )}
          </VisibilitySensor>
        )}
      </div>

      {children && (
        <div className="content-template-children">
          <VisibilitySensor>{() => children}</VisibilitySensor>
        </div>
      )}

      {(buttonBottom || (buttonBottomMobile && isMobile)) && ifButton && (
        <div className={`content-template-btn-bottom top-space ${buttonSecClass}`}>
          <Button
            text={buttonText}
            buttonLink={buttonLink}
            className={`p-small ${buttonClass}`}
            buttonId={buttonId}
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};


ContentTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string.isRequired,
  ifButton: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  buttonId: PropTypes.string,
  headingClass: PropTypes.string,
  titleClass: PropTypes.string,
  paragraphClass: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  paragraph1Class: PropTypes.string,
  paragraph2Class: PropTypes.string,
  ifParagraph: PropTypes.bool,
  buttonClass: PropTypes.string,
  buttonBottom: PropTypes.bool,
  buttonBottomMobile: PropTypes.bool, // New prop
  children: PropTypes.node,
  isHero: PropTypes.bool,
  paragraphSide: PropTypes.bool,
  buttonSide: PropTypes.bool,
};

export default ContentTemplate;
