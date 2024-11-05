// VisibilitySensor.js
import React, { useState, useEffect, useRef } from 'react';

const VisibilitySensor = ({ onChange = () => {}, threshold = 0.1, children, oneTime = false, resetOnHover = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inView = entry.isIntersecting;
          if (!oneTime || !isVisible) {
            setIsVisible(inView);
            onChange(inView);
          }
          if (inView && oneTime) observer.unobserve(entry.target);
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [threshold, onChange, oneTime, isVisible]);

  const handleMouseEnter = () => {
    if (resetOnHover) {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 0);
    }
  };

  return (
    <div ref={elementRef} onMouseEnter={handleMouseEnter}>
      {typeof children === 'function' ? children({ isVisible }) : children}
    </div>
  );
};

export default VisibilitySensor;
