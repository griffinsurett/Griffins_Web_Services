// Box.js

import React from "react";
import "./box.css"; // Ensure to create this CSS file for styling
import IntersectionObserverComponent from "../../ScrollAnimations";

const Box = ({
  className,
  children,
  href,
  delayIn = 0,
  inViewClass = "fade-in", // Default to "fade-in"
  outViewClass = "fade-out", // Default to "fade-out"
}) => {
  const additionalClass = href ? "dynamic-hover-border-effect" : "";

  const BoxContent = (
    <IntersectionObserverComponent 
      inViewClass={inViewClass} // Use provided or default class
      outViewClass={outViewClass} // Use provided or default class
      delayIn={delayIn} // Use calculated delay
    >
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
