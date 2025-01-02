import React from 'react';
import { useNavigate } from 'react-router';

import { AboutSection } from '../components/section';
import Button from '../components/button';
import { ABOUT_INFO } from '../constants';

import work from '../assets/work.png';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='about padding'>
      <h1>About Us</h1>

      {ABOUT_INFO.map((info, index) => (
        <AboutSection data={info} key={index} />
      ))}

      <div className='joinBox'>
        <img src={work} alt="" />

        <div>
          <div className="joinText">
            <h3>Join us in embracing the future of work</h3>
            <p>Partner with Abnex Remote and discover the benefits of remote tech recruitment done right. Your next great hire is just a click away.</p>
          </div>

          <Button
            color='secondary'
            onClick={() => navigate('/contact')}
          >
            Join Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About;