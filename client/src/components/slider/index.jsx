import React, { useState } from 'react';
import Arrow from '../icons/Arrow';
import { arrow } from '../../assets/icons';
import './style.scss';

const SLIDER_WIDTH = 1293;

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleLeftClick = () => {
    if (currentSlide) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleRightClick = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div>
      <h2>Case studies <img src={arrow} /></h2>
      <div className="slider-outer">
        {
          slides.map((slide, index) => (
            <div
              className="slide"
              key={index}
              style={index === currentSlide ? null : { visibility: 'hidden', opacity: 0 }}
            >
              <div className="info">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
              <div className='illustration'>
                <img src={slide.image} alt='illustration' />
              </div>
            </div>
          ))
        }
      </div>
      <div className="controls">
        <div className='leftArrow' onClick={handleLeftClick}>
          <Arrow disabled={currentSlide === 0} />
        </div>

        <span className='current'>{currentSlide + 1}</span>
        <span className='slash'>/</span>
        <span className='number'>{slides.length}</span>

        <div className='rightArrow' onClick={handleRightClick}>
          <Arrow disabled={currentSlide === slides.length - 1} />
        </div>
      </div>
    </div>
  )
}

export default Slider;