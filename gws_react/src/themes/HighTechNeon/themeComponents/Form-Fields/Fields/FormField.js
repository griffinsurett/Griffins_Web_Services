// FormField.js
import React from 'react';
import PropTypes from 'prop-types';
import '../fields.css';

const FormField = ({
  label,
  component: Component = 'input', // Default to 'input', can be 'textarea'
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  className,
  ...rest
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Component
        type={Component === 'input' ? type : undefined} // 'type' is only valid for 'input'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        className={`${className} dynamic-focus-border-effect`}
        {...rest} // Spread any additional props
      />
    </>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  component: PropTypes.oneOf(['input', 'textarea']),
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default FormField;
