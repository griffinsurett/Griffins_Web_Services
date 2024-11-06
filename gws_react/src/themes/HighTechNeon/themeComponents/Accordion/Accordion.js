// Accordion.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from '../../themeControls/VisibilitySensor/VisibilitySensor';
import './accordion.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <div
          className={`accordion-item dynamic-hover-border-effect dynamic-active-border-effect ${isOpen ? 'active' : ''} ${
            isVisible ? 'fade-in' : 'hidden'
          }`}
        >
          <div className="accordion-header" onClick={toggleAccordion}>
            <h6 className="accordion-title">{title}</h6>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} size="xs" className={`accordion-icon ${isOpen ? 'open' : ''}`} />
          </div>
          {isOpen && <div className="accordion-content">{content}</div>}
        </div>
      )}
    </VisibilitySensor>
  );
};

// Accordion component to render multiple AccordionItem components
const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
