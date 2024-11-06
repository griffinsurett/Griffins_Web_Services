// Box.js
import React from "react";
import "./box.css";
import VisibilitySensor from "../../themeControls/VisibilitySensor/VisibilitySensor";

const Box = ({ className, children, href, delay = 0 }) => {
  // Define the additional class if the box is a link
  const additionalClass = href ? "dynamic-hover-border-effect" : "";

  const BoxContent = (
    <VisibilitySensor delay={delay}>
      {({ isVisible }) => (
        <div
          className={`box ${additionalClass} ${className} ${
            isVisible ? "fade-in" : "hidden"
          }`}
        >
          {children}
        </div>
      )}
    </VisibilitySensor>
  );

  return href ? (
    <a href={href} className="box-link hover-scale">
      {BoxContent}
    </a>
  ) : (
    BoxContent
  );
};

export default Box;
