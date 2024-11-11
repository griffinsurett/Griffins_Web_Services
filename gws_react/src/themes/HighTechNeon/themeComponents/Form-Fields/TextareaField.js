// Textarea-Field.js
import React from "react";
import PropTypes from "prop-types";
import "./fields.css"; // Assuming you have some CSS for styling
import IntersectionObserverComponent from "../../ScrollAnimations";

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  placeholder = "", // Default value for placeholder
  className,
}) => {
  return (
    <IntersectionObserverComponent inViewClass="fade-in" outViewClass="fade-out">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        className={`${className} dynamic-focus-border-effect`} 
      />
    </IntersectionObserverComponent>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TextareaField;
