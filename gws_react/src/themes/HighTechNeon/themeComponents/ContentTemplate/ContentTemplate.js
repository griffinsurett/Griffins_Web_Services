// ContentTemplate.js
import React from "react";
import PropTypes from "prop-types";
import "./content-template.css";
import Button from "../Buttons/Button";
import Typewriter from "../TextEffects/Typewriter/SimpleTypewriter/SimpleTypewriter";

const ContentTemplate = ({
  title,
  heading,
  ifButton = false,
  buttonText = "Learn More",
  buttonLink = "#",
  onClick,
  className,
  buttonId,
  titleClass,
  headingClass,
  paragraphClass,
  paragraph1,
  paragraph2,
  paragraph1Class,
  paragraph2Class,
  textSectionClass,
  ifParagraph = false,
  buttonBottom = false,
  buttonClass,
  buttonSecClass,
  children,
  isHero = false, // Hero section flag
}) => {
  return (
    <div className={`content-template ${className} flex`}>
      <div className={`title-section column ${textSectionClass}`}>
      {title && (
        <h5 className={`content-title smaller-bottom-space ${titleClass}`}>
          <Typewriter text={title} speed={100} />
        </h5>
      )}
      {heading && (
        isHero ? (
          <h1 className={`bold ${headingClass} text-shadow-for-dark`}>
            {heading}
          </h1>
        ) : (
          <h2 className={`bold ${headingClass} text-shadow-for-dark`}>
            {heading}
          </h2>
        )
      )}
</div>

      {ifParagraph && (
        <div className={`content-template-paragraphs ${paragraphClass}`}>
          {paragraph1 && (
            <p className={paragraph1Class}>
              <Typewriter text={paragraph1} speed={10} />
            </p>
          )}
          {paragraph2 && (
            <p className={paragraph2Class}>
              <Typewriter text={paragraph2} speed={10} />
            </p>
          )}
        </div>
      )}

      {children && <div className="content-template-children">{children}</div>}

      {!buttonBottom && ifButton && (
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

      {buttonBottom && ifButton && (
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
  children: PropTypes.node,
  isHero: PropTypes.bool, // To differentiate between hero and section
};

export default ContentTemplate;
