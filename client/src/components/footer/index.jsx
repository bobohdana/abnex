import React from 'react';
import { useNavigate } from 'react-router';

import './style.scss';
import logo from '../../assets/big-logo.png';

const INFOS = [
  {
    title: 'Services',
    list: [
      { label: 'Tech Consulting', pass: '/services/tech-consulting'},
      { label: 'Software Development', pass: '/services/software-development'},
    ],
  },
  {
    title: 'About Us',
    list: [
      { label: 'About Us', pass: '/about' },
      { label: 'Contact', pass: '/contact' },
    ],
  },
  {
    title: 'Legal',
    list: [
      { label: 'Privacy Policy', pass: 'privacy-policy' },
      { label: 'Terms of Service', pass: 'terms-and-conditions' },
      { label: 'Legal Notice', pass: 'legal-notice' },
    ]
  }
]

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="padding footer">
      <div><img src={logo} alt="logo" /></div>

      <div className='infos'>
        {
          INFOS.map((info, index) => (
            <div className="info" key={index}>
              <h6>{info.title}</h6>

              <ul>{info.list.map((item, index) => (
                <li onClick={() => navigate(item.pass)} key={index}>{item.label}</li>
              ))}</ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Footer;