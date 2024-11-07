// Input-Field.js
import React from "react";
import PropTypes from "prop-types";
import "./fields.css"; // Assuming you have some CSS for styling

const InputField = ({
  label,
  type = "text", // Default value for type
  name,
  value,
  onChange,
  placeholder = "", // Default value for placeholder
  className,
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        className={`${className} dynamic-focus-border-effect`} 
      />
    </>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputField;
