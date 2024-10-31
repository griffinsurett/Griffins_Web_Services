// Section.js
import React from 'react';
import './section.css'; 

const Section = ({ children, className, shadowClass }) => {
    return (
        <section className={`section-element section-padding full-height ${className}`}>
             {/* <div className={`complex-shadow absolute ${shadowClass}`}></div> */}
             {children}
        </section>
    );
};

export default Section;