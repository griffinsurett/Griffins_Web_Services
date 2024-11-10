// Box.js

import React from "react";
import "./box.css"; // Ensure to create this CSS file for styling
import IntersectionObserverComponent from "../../ScrollAnimations";

const Box = ({ className, children, href }) => {
  // Define a variable for the additional class
  const additionalClass = href ? "dynamic-hover-border-effect" : "";

  // Box content with the additional class
  const BoxContent = (
    <IntersectionObserverComponent inViewClass="fade-in" outViewClass="fade-out">
    <div className={`box ${additionalClass} ${className}`}>
      {children}
    </div>
    </IntersectionObserverComponent>
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
