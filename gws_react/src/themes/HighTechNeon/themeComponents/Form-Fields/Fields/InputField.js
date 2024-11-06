// InputField.js
import React from 'react';
import FormField from './FormField';
import '../fields.css';

const InputField = (props) => {
  return <FormField component="input" {...props} />;
};

export default InputField;