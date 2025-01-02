import React from 'react';

import { arrow } from '../../assets/icons';
import whiteBlock from '../../assets/white-block.svg';
import formImage from '../../assets/form-illustration.png';
import serviceImg from '../../assets/service-right-img.svg';

import Form from '../form';

import './style.scss';
import Button from '../button';

export const Blocks = ({ data, ExtraInfo }) => {
  const { title, blocks } = data;

  return (
    <>
      <h2>{title} <img src={arrow} /></h2>

      <div className='blocks'>
        <ExtraInfo />

        {blocks.map((block, index) => (
          block.type === 'special' ? (
            <div className='special' key={index}>
              <img src={block.src}></img>
              <div className="layer">
                { block.img ? (
                    <div
                      className='image'
                      style={{ backgroundImage: `url(${block.img})` }}
                    >
                      <h4>{block.label}</h4>
                    </div>
                  ) : <h4>{block.label}</h4>
                }
                <p className='text'>{block.text}</p>
              </div>
            </div>
          ) : (
            <div className='block' key={index}>
              <h4>{block.label}</h4>
              <p className='text'>{block.text}</p>
            </div>
          )
        ))}
      </div>
    </>
  )
}

export const FormSection = () => {
  return (
    <section className='formSection padding'>
      <img src={formImage} alt="" />
      <div className='formBox'>
        <h2>Contact</h2>
        <p>Share your business requirements. We handle the rest.</p>

        <Form isPreview={true} />
      </div>
    </section>
  )
}

export const AboutSection = ({ data }) => {
  const { title, desc, pic, text, reverse } = data;
  return (
    <div className="aboutSection">
      <div className={`aboutInfo ${reverse && 'reverse'}`}>
        <div className='description'>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className='picture'><img src={pic} alt="" /></div>
      </div>
      <p>{text}</p>
    </div>
  )
}

export const ServiceSection = ({ title, description, handleClick }) => {
  return (
    <div className="serviceSection">
      <div className='serviceInfo'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <Button color='secondary' onClick={handleClick}>Book a consultation</Button>
      <div className="rectangle" />
      
      <div className="img">
        <img src={serviceImg} alt="" />
      </div>
    </div>
  )
}