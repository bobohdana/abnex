import React from 'react';
import { useLocation, useNavigate } from 'react-router';

import { FormSection, ServiceSection } from '../components/section';
import Slider from '../components/slider';

import { TECH_CONSULTING, SOFTWARE_DEVELOPMENT } from '../constants';
import leftBlock from '../assets/big-block-short.svg';
import rightBlockLong from '../assets/big-block-right-long.svg';
import rightBlockShort from '../assets/big-block-right-short.svg';
import softBlockOne from '../assets/soft-block-1.svg';
import softBlockTwo from '../assets/soft-block-2.svg';
import { arrow } from '../assets/icons';

const Tech = () => {
  const navigate = useNavigate();
  const { title, description, slides } = TECH_CONSULTING;

  return (
    <>
      <ServiceSection
        title={title}
        description={description}
        handleClick={() => navigate('/contact')}
      />
      <div className='serviceContent padding'>
        <div className='streamline'>
          <div className='left'>
            <img src={leftBlock} alt="" />
            <div>
              <h2>Streamline your IT needs</h2>
              <p className='text'>Abnex Remote is equipped to handle projects of any size or complexity. Communicate your business needs, and we take care of the selection and recruitment.</p>
            </div>
            <p className='paragraph'>Unlock global talent and expertise with remote tech profiles, seamlessly integrating diverse skill sets into your projects for unparalleled innovation.</p>
          </div>
          <div className="right">
            <div className='rightTop'>
              <div>
                <img src={rightBlockShort} alt="" />
                <p>Empower  your team with remote profiles for seamless productivity.</p>
              </div>
              <div className='square'>
                <p>Stay agile with remote tech talent, keeping your projects ahead.</p>
              </div>
            </div>
            <div className='rightBottom'>
              <img src={rightBlockLong} alt="" />
              <p>Cut costs, streamline operations with remote tech profiles.</p>
            </div>
          </div>
        </div>
        <Slider slides={slides} />
      </div>
    </>
  )
}

const Soft = () => {
  const navigate = useNavigate();
  const { title, description, slides, lists } = SOFTWARE_DEVELOPMENT;

  return (
    <>
      <ServiceSection
        title={title}
        description={description}
        handleClick={() => navigate('/contact')}
      />
      <div className='serviceContent padding'>
          <h2>Transform your processes with digitalization <img src={arrow} /></h2>

          <div className="blocksContainer">
            <div className="block outer">
              <img src={softBlockOne} alt="" />
              <div className="blockContent">
                <div>
                  <h4>Needs Analysis</h4>
                </div>
                <p className='text'>Identify goals and assess digitalization opportunities.</p>
              </div>
            </div>
            <div className="block inner">
              <img src={softBlockTwo} alt="" />
              <div className="blockContent">
                <h4>Strategic <br /> Planning</h4>
                <p className='text'>Develop a strategy to integrate suitable technologies</p>
              </div>
            </div>
            <div className="block inner reverse">
              <img src={softBlockTwo} alt="" />
              <div className="blockContent">
                <h4 className='end'>Technology</h4>
                <p className='text'>Implement selected solutions</p>
              </div>
            </div>
            <div className="block outer reverse">
              <img src={softBlockOne} alt="" />
              <div className="blockContent">
                <div>
                  <h4>Product delivery</h4>
                </div>
                <p className='text'>Delivery team ensures the delivery of a unique, high-quality product</p>
              </div>
            </div>
          </div>

        <div className='lists'>{lists.map((item, index) => (
          <div className="listItem" key={index}>
            <div>
              <img src={item.icon} alt="" />
              <h4>{item.label}</h4>
            </div>
            <p className='text'>{item.paragraph}</p>
          </div>
        ))}</div>
      </div>
      <div className="padding paddingBottom">
        <Slider slides={slides} />
      </div>
    </>
  )
}

const Service = () => {
  const location = useLocation();
  const Component = location.pathname.includes('soft') ? Soft : Tech;

  return (
    <div className='service'>
      <Component />
      <FormSection />
    </div>
  )
}

export default Service;