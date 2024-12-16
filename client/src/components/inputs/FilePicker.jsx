import React, { useState } from 'react';
import PaperClip from '../icons/PaperClip';
import { trash } from '../../assets/icons';

import './style.scss';

const FilePicker = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleDeleteFile = () => {
    setFile(null);
  }

  return (
    <>
      {file ? (
        <div className='fileName'>
          <PaperClip primary='false' />
          <p>{file.name}</p>
          <img src={trash} onClick={handleDeleteFile} className='trash' alt='trash' />
        </div>
      ) : null}

      <label for='upload-file' className='fileLabel' >
        <PaperClip className='fileIcon' />Attach file
      </label>
      <input
        id='upload-file'
        className='fileInput'
        onChange={handleChange}
        type='file'
      />
    </>
  )
}

export default FilePicker;