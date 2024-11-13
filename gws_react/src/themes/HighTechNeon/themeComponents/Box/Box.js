// Box.js

import React from "react";
import "./box.css";
import IntersectionObserverComponent from "../../ScrollAnimations";

const Box = ({
  className,
  children,
  href,
  delayIn = 0,
  inViewClass = "scale-in",
  outViewClass = "scale-out",
  staggeredAnimation = true,
  index = 0, // Default index if not provided
  delayBase = 150, // Base delay to make staggered animation noticeable
}) => {
  const additionalClass = href ? "dynamic-hover-border-effect" : "";

  const BoxContent = (
    <IntersectionObserverComponent 
      inViewClass={inViewClass} 
      outViewClass={outViewClass} 
      delayIn={delayIn}
      staggeredAnimation={staggeredAnimation} // Enable staggered animation
      index={index} // Pass index for staggered delay
      delayBase={delayBase} // Set base delay for staggered effect
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
