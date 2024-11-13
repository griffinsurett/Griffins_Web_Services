// StaggeredAnimation.js
import React from 'react';
import PropTypes from 'prop-types';

const StaggeredAnimation = ({ children, index, delayBase = 100 }) => {
  const calculatedDelay = index * delayBase;
  return React.cloneElement(children, {
    style: { ...children.props.style, '--delay-in': `${calculatedDelay / 1000}s` }
  });
};

StaggeredAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  delayBase: PropTypes.number,
};

export default StaggeredAnimation;
