// IntersectionObserverComponent.js
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import StaggeredAnimation from './StaggeredAnimation';
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
  staggeredAnimation = false,
  index = 0,
  delayBase = 100,
}) => {
  const ref = useRef(null);
  const calculatedDelay = staggeredAnimation ? index * delayBase : delayIn;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty('--delay-in', `${calculatedDelay / 1000}s`);
            entry.target.classList.add(inViewClass);
            entry.target.classList.remove(outViewClass);
          } else {
            entry.target.style.setProperty('--delay-out', `${delayOut / 1000}s`);
            entry.target.classList.add(outViewClass);
            entry.target.classList.remove(inViewClass);
          }
        });
      },
      { threshold, rootMargin }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [inViewClass, outViewClass, threshold, rootMargin, calculatedDelay, delayOut]);

  // Wrap children with StaggeredAnimation if staggeredAnimation is true
  const WrappedChildren = staggeredAnimation ? (
    <StaggeredAnimation index={index} delayBase={delayBase}>
      {children}
    </StaggeredAnimation>
  ) : (
    children
  );

  return (
    <div ref={ref} className={`intersection-observer-wrapper ${className}`}>
      {WrappedChildren}
    </div>
  );
};

IntersectionObserverComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inViewClass: PropTypes.string,
  outViewClass: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  delayIn: PropTypes.number,
  delayOut: PropTypes.number,
  staggeredAnimation: PropTypes.bool,
  index: PropTypes.number,
  delayBase: PropTypes.number,
};

export default IntersectionObserverComponent;
