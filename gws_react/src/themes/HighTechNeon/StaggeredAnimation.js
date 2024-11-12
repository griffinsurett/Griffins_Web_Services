// StaggeredAnimation.js
import React from 'react';
import PropTypes from 'prop-types';

const StaggeredAnimation = ({ children, index, delayBase = 100 }) => {
  const calculatedDelay = index * delayBase;

  return React.cloneElement(children, { delayIn: calculatedDelay });
};

StaggeredAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  delayBase: PropTypes.number, // Base delay in milliseconds
};

export default StaggeredAnimation;
