import React from 'react';
import { useNavigate } from 'react-router';

import logo from '../../assets/logo.png';
import './style.scss';

import Menu from '../menu';
import Button from '../button';

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: 'Tech Consulting',
      action: () => navigate('/services/tech-consulting')
    },
    {
      title: 'Software Development',
      action: () => navigate('/services/software-development')
    },
  ]
  
  return (
    <div className='header'>
      <a href="/"><img src={logo} alt='logo' /></a>

      <ul className="nav">
        <li>
          <Menu items={items}>Services</Menu>
        </li>
        <li onClick={() => navigate('/about')}>About us</li>
      </ul>

      <Button
        size='special'
        color='gradient'
        onClick={() => navigate('/contact')}
      >
        Contact Us
      </Button>
    </div>
  )
}

export default Header;