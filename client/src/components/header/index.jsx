import React from 'react';
import { useNavigate } from 'react-router';

import { menu } from '../../assets/icons';
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

  const extraItem = {
    title: 'Contact Us',
    action: () => navigate('/contact')
  }
  
  return (
    <div className='header padding' id='header'>
      <div className="logo">
        <img src={logo} alt='logo' onClick={() => navigate('/')} />
      </div>

      <ul className="nav">
        <li>
          <Menu items={items}>Services</Menu>
        </li>
        <li onClick={() => navigate('/about')}>About us</li>
      </ul>

      <div className="navMobile">
        <Menu items={[...items, extraItem]} isMobile={true}>
          <img src={menu} alt="" />
        </Menu>
      </div>

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