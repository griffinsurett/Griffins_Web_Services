// TextareaField.js
import React from 'react';
import FormField from './FormField';
import '../fields.css';

const TextareaField = (props) => {
  return <FormField component="textarea" {...props} />;
};

export default TextareaField;
