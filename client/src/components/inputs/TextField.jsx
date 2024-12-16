import React, { useState } from 'react';
import './style.scss';

const TextField = ({ error, type = 'text', ...props}) => {
  return (
    <input
      type={type}
      className={`input ${error && 'error'}`}
      {...props}
    />
  )
}

export default TextField;