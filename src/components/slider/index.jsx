import React, { useState } from 'react';
import Arrow from '../icons/Arrow';
import './style.scss';

import slide1 from '../../assets/tech-slide-1.png';
import slide2 from '../../assets/tech-slide-2.png';
import slide3 from '../../assets/tech-slide-3.png';
import slide4 from '../../assets/tech-slide-4.png';
import slide5 from '../../assets/tech-slide-5.png';


const SLIDES = [
  {
    title: 'Recruitment of Full Stack Developers:',
    description: "A software company aims to develop a new application and is in search of experienced Full Stack developers. Utilizing a remote recruitment platform, it seeks candidates proficient in technologies like JavaScript, Python, and React. Following thorough virtual interviews, it hires talented Full Stack developers who contribute to the application's creation.",
    image: slide1,
  },
  {
    title: 'Hiring Cybersecurity Specialists:',
    description: "Following a cyberattack, a company realizes the importance of a robust cybersecurity team. It seeks experienced cybersecurity specialists proficient in technologies such as SIEM, IDS/IPS, and Firewall through a remote recruitment platform. After conducting in-depth virtual interviews to assess their skills, it hires cybersecurity experts to enhance its IT security infrastructure.",
    image: slide2,
  },
  {
    title: 'Recruitment of UX/UI Designers:',
    description: "A design agency endeavors to create a new user interface for a mobile application. It searches for talented UX/UI designers proficient in tools like Sketch, Adobe XD, and Figma through a remote recruitment platform. After reviewing their portfolios and conducting virtual interviews to discuss their skills, it hires designers to craft an intuitive and appealing interface for the application.",
    image: slide3,
  },
  {
    title: 'Hiring Data Analysis Specialists:',
    description: "An enterprise aims to leverage its data for strategic decision-making. It seeks data analysis specialists proficient in tools such as Python, R, and SQL through a remote recruitment platform. After reviewing their skills and conducting thorough virtual interviews, it recruits data analysts who provide valuable insights for the company.",
    image: slide4,
  },
  {
    title: 'Recruitment of Mobile App Developers:',
    description: "A startup plans to develop a mobile application and seeks talented mobile app developers. It searches for candidates proficient in programming languages like Swift, Kotlin, and Flutter through a remote recruitment platform. After reviewing their code and past projects online, it hires developers who create a compelling and functional mobile application, contributing to the startup's success.",
    image: slide5,
  },
]

const SLIDER_WIDTH = 1293;

const Slider = ({ slides = SLIDES }) => {
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
    <div className="slider-outer">
      <div
        className="slider-inner"
        style={{
          transform: `translateX(-${SLIDER_WIDTH * currentSlide}px)`
        }}
      >
        {
          slides.map((slide, index) => (
            <div className="slide" key={index}>
              <div className="info">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
              <img src={slide.image} className='illustration' alt='illustration' />
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