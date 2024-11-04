// Section.js
import React from 'react';
import './section.css'; 

const Section = ({ children, className, shadowClass }) => {
    return (
        <section className={`section-element section-padding full-height ${className}`}>
             {children}             
        </section>
    );
};

export default Section;