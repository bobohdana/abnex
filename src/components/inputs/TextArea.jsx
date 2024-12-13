import React, { useState, useRef } from 'react';
import './style.scss';

const MIN_HEIGHT = 160;
const MAX_HEIGHT = 380;

const TextArea = ({ error, ...props }) => {
  const [height, setHeight] = useState(MIN_HEIGHT);
  const ref = useRef();

  const onInput = () => {
    if (ref.current.scrollHeight < MIN_HEIGHT) {
      setHeight(MIN_HEIGHT);
    } else if (ref.current.scrollHeight > MAX_HEIGHT) {
      setHeight(MAX_HEIGHT);
    } else {
      setHeight(ref.current.scrollHeight);
    }
  }
  return (
    <textarea
      ref={ref}
      onInput={onInput}
      className={`textarea ${error && 'error'}`}
      style={{ height }}
      {...props}
    />
  )
}

export default TextArea;