import React from 'react';
import Form from '../components/form';
import formImage from '../assets/form-illustration.png';

const INFOS = [
  {
    title: 'Phone Number',
    data: [{
      text: '(239) 555-0108',
      link: 'tel:2395550108',
    }, {
      text: '(808) 555-0111',
      link: 'tel:8085550111',
    }],
  },
  {
    title: 'Email',
    data: [{
      text: 'infoabnex@abnex.com',
      link: 'mailto:infoabnex@abnex.com',
    }],
  },
  {
    title: 'Address',
    data: [{ text: '1901 Thornridge Cir. Shiloh, Hawaii 81063' }],
  },
]

const Contact = () => {
  return (
    <div className='contact'>
      <div className='container padding'>
        <div className='formBox'>
          <h1>Contact Us</h1>
          <p>Please fill out the form below to get in touch with us. Our team will respond to your inquiry as soon as possible.</p>
          <Form />
        </div>
        <img src={formImage} className='picture' alt="" />
      </div>
      <div className='contacts padding'>
        {INFOS.map((info, index) => (
          <div key={index}>
            <h4>{info.title}</h4>
            {info.data.map((item, index) => (
              <a href={item.link}  key={index}><p>{item.text}</p></a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact;