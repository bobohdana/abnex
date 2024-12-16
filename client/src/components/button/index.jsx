import React from 'react';
import './style.scss';

const Button = ({ size='large', color='primary', children, ...props }) => {
  return (
    <button
      className={`button ${size} ${color}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;