// VisibilitySensor.js
import React, { useState, useEffect, useRef } from 'react';

const VisibilitySensor = ({
  onChange = () => {},
  threshold = 0.1,
  delay = 0,
  children,
  oneTime = false,
  resetOnHover = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // Track if it has ever been visible
  const elementRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inView = entry.isIntersecting;

          if (inView && (!isVisible || !oneTime)) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true);
              setHasBeenVisible(true); // Mark as visible to render only once if `oneTime` is true
              onChange(true);
            }, delay);
          } else if (!inView && !oneTime) {
            clearTimeout(timeoutRef.current);
            setIsVisible(false);
            onChange(false);
          }

          if (inView && oneTime) observer.unobserve(entry.target);
        });
      },
      { threshold }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [threshold, onChange, oneTime, delay, isVisible]);

  const handleMouseEnter = () => {
    if (resetOnHover) {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 0);
    }
  };

  // Only render `div` when `isVisible` or `hasBeenVisible` is `true`
  return isVisible || hasBeenVisible ? (
    <div ref={elementRef} onMouseEnter={handleMouseEnter}>
      {typeof children === 'function' ? children({ isVisible }) : children}
    </div>
  ) : null;
};

export default VisibilitySensor;
