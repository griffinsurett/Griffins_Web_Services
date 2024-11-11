import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './animations.css';

const IntersectionObserverComponent = ({
  children,
  className,
  inViewClass = 'fade-in',
  outViewClass = 'fade-out',
  threshold = 0.1,
  rootMargin = '0px',
  delayIn = 0,   
  delayOut = 0,  
  applyDelayOnce = false, 
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isFirstEntry = !entry.target.hasAttribute('data-has-entered');

          if (entry.isIntersecting) {
            // Apply delay only on the first intersection if applyDelayOnce is true
            if (!applyDelayOnce || isFirstEntry) {
              entry.target.style.setProperty('--delay-in', `${delayIn / 1000}s`);
              entry.target.setAttribute('data-has-entered', 'true');
            } else {
              entry.target.style.setProperty('--delay-in', '0s');
            }

            entry.target.style.setProperty('--delay-out', '0s');
            entry.target.classList.add(inViewClass);
            entry.target.classList.remove(outViewClass);
          } else {
            entry.target.style.setProperty('--delay-out', `${delayOut / 1000}s`);
            entry.target.classList.add(outViewClass);
            entry.target.classList.remove(inViewClass);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [inViewClass, outViewClass, threshold, rootMargin, delayIn, delayOut, applyDelayOnce]);

  return (
    <div ref={ref} className={`intersection-observer-wrapper ${className}`}>
      {children}
    </div>
  );
};

IntersectionObserverComponent.propTypes = {
  children: PropTypes.node.isRequired,
  inViewClass: PropTypes.string,
  outViewClass: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  delayIn: PropTypes.number, // Accept delay in milliseconds
  delayOut: PropTypes.number, // Accept delay in milliseconds
  applyDelayOnce: PropTypes.bool, // New prop to control delay application
};

export default IntersectionObserverComponent;
