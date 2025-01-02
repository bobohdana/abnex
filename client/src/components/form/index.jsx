import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './style.scss';

import TextField from '../inputs/TextField';
import TextArea from '../inputs/TextArea';
import FilePicker from '../inputs/FilePicker'
import Button from '../button';

const fields = [
  {
    field: 'name',
    placeholder: 'Full Name',
    initialValue: '',
    Component: TextField,
  },
  {
    field: 'email',
    type: 'email',
    placeholder: 'Email',
    initialValue: '',
    Component: TextField,
  },
  {
    field: 'phone',
    placeholder: 'Phone number ( optionally )',
    initialValue: '',
    type: 'number',
    required: false,
    Component: TextField,
  },
  {
    field: 'company',
    placeholder: 'Company',
    initialValue: '',
    Component: TextField,
  },
  {
    field: 'position',
    placeholder: 'Position',
    initialValue: '',
    onPreview: false,
    Component: TextField,
  },
  {
    field: 'subject',
    placeholder: 'Subject',
    initialValue: '',
    onPreview: false,
    Component: TextField,
  },
  {
    field: 'message',
    placeholder: 'Message',
    initialValue: '',
    Component: TextArea,
  },
  {
    field: 'file',
    onPreview: false,
    initialValue: null,
    Component: FilePicker,
  },
]

const Form = ({ isPreview = false }) => {
  const initialValues = fields.reduce((acc, { 
    onPreview = true, 
    field, 
    initialValue 
  }) => {
    if (isPreview && onPreview || !isPreview) {
      acc[field] = initialValue;
    }
    return acc;
  }, {})
  

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isFormReset, setIsFormReset] = useState(false);
  
  const formRef = useRef(null);
  
  const dirty = Object.values(values).some(value => !!value);
  const isError = Object.values(errors).some(value => value);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const _errors = {};
    Object.keys(values).forEach(key => {
      if (!values[key] && key !== 'phone' && key !== 'file') {
        _errors[key] = true;
      }
    })
    
    if (Object.keys(_errors).length) {
      setErrors(_errors);
    } else {
      setLoading(true);
      const formData = new FormData(formRef.current);
      const token = formData.get("g-recaptcha-response");
      formData.delete("g-recaptcha-response");
      formData.append('token', token)
      
      fetch('/form', {
        method: 'POST',
        body: formData,
      }).then(() => {
        formRef.current.reset();
        
        setValues({ ...initialValues });
        setIsFormReset(true);
        setSelected(false);
        setLoading(false);
      })
    }
  }
  
  const handleChange = (event) => {
    console.log('handleChange');
    
    if (event.target.files) {
      setValues(prev => ({
        ...prev,
        [event.target.name]: event.target.files[0], 
      }))
    } else {
      setValues(prev => ({
        ...prev,
        [event.target.name]: event.target.value, 
      }))
      
      if (event.target.value && event.target.required) {
        setErrors(prev => ({
          ...prev,
          [event.target.name]: false,
        }))
      }
    }

    setIsFormReset(false);
  }

  const handleBlur = (event) => {
    if (event.target.required) {
      setErrors(prev => ({
        ...prev,
        [event.target.name]: !event.target.value,
      }))
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='form'
      onChange={handleChange}
      onBlur={handleBlur}
    >
      {
        fields.map(({ 
          field, 
          type = 'text', 
          required = true,
          placeholder,
          onPreview = true,
          Component
        }) => !isPreview ? (
          <Component
            key={field}
            name={field}
            disabled={loading}
            error={errors[field]}
            placeholder={placeholder}
            isFormReset={isFormReset}
            required={required}
            type={type}
          />
        ) : onPreview ? (
          <Component
            key={field}
            name={field}
            disabled={loading}
            error={errors[field]}
            placeholder={placeholder}
            required={required}
            type={type}
          />
        ) : null)
      }

      {!isPreview && (
        <div className='condition'>
          <div className={`checkbox ${selected && 'selected'}`} onClick={() => setSelected(!selected)} />
          <p>
            I have read and agree to the 
            <a href='/terms-and-conditions' target='_blank' className='link'>&nbsp;terms of service&nbsp;</a>
            an
            <a href='/privacy-policy' target='_blank' className='link'>&nbsp;privacy policies</a>
          </p>
        </div>
      )}

      {selected && (
        <div className="captcha">
          <ReCAPTCHA 
            // sitekey={process.env.REACT_APP_SITE_KEY}
            sitekey='6LfSGJ0qAAAAAHH1PXz-L0yLRUPRajqleKiR7RiD'
            onChange={() => setCaptchaVerified(true)}
            onExpired={() => setCaptchaVerified(false)}
          />
        </div>
      )}

      <Button
        type='submit'
        size='small'
        disabled={!dirty || isError || !selected || !captchaVerified}
      >
        Send
      </Button>
    </form>
  )
}

export default Form;