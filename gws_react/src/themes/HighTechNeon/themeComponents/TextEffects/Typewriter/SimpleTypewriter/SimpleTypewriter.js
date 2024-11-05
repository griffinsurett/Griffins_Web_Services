// SimpleTypewriter.js
import React, { useState, useEffect } from 'react';
import VisibilitySensor from '../../../../themeControls/VisibilitySensor/VisibilitySensor';
import './simple-typewriter.css';

const Typewriter = ({ text, speed = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let index = 0;
    let intervalId;

    if (hasStarted) {
      intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, index + 1));
        index += 1;

        if (index === text.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }

    return () => clearInterval(intervalId);
  }, [hasStarted, text, speed]);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible && !hasStarted) {
          setHasStarted(true);
        }
      }}
      oneTime={true} // Typewriter effect should only trigger once
    >
      <span className={className}>{displayedText}</span>
    </VisibilitySensor>
  );
};

export default Typewriter;
