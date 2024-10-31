// Box.js

import React from "react";
import "./box.css"; // Ensure to create this CSS file for styling

const Box = ({ className, children, href }) => {
  // Define a variable for the additional class
  const additionalClass = href ? "dynamic-hover-border-effect" : "";

  // Box content with the additional class
  const BoxContent = (
    <div className={`box ${additionalClass} ${className}`}>
      {children}
    </div>
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
