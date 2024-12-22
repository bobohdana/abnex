import React from 'react';

import { arrow } from '../../assets/icons';
import whiteBlock from '../../assets/white-block.svg';
import formImage from '../../assets/form-illustration.png';

import Form from '../form';

import './style.scss';

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
              <img src={whiteBlock}></img>
              <div className="layer">
                <div
                  className='image'
                  style={{ backgroundImage: `url(${block.img})` }}
                >
                  <h4>{block.label}</h4>
                </div>
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
    <section className='formSection'>
      <img src={formImage} alt="" />
      <div className='formBox'>
        <h2>Contact</h2>
        <p>Share your business requirements. We handle the rest.</p>

        <Form isPreview={true} />
      </div>
    </section>
  )
}