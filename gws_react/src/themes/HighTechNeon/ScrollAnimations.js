import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './animations.css';

const IntersectionObserverComponent = ({
  children,
  inViewClass = 'fade-in',
  outViewClass = 'fade-out',
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(inViewClass);
            entry.target.classList.remove(outViewClass);
          } else {
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
  }, [inViewClass, outViewClass, threshold, rootMargin]);

  return (
    <div ref={ref} className="intersection-observer-wrapper">
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
};

export default IntersectionObserverComponent;
