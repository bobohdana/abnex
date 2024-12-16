import React, { useState } from 'react';

import './style.scss';

import {
  palette,
  pie,
  git,
  terminal,
  gear,
  file
} from './../../assets/icons';

import analysis from './../../assets/analysis.png';
import design from './../../assets/design.png';
import development from './../../assets/development.png';
import testing from './../../assets/testing.png';
import deployment from './../../assets/deployment.png';
import maintenance from './../../assets/maintenance.png';

const ITEMS = [
  {
    title: 'Requirements analysis',
    icon: pie,
    picture: analysis,
  },
  {
    title: 'Design',
    icon: palette,
    picture: design,
  },
    {
    title: 'Development',
    icon: terminal,
    picture: development,
  },
    {
    title: 'Testing',
    icon: file,
    picture: testing,
  },
    {
    title: 'Deployment',
    icon: git,
    picture: deployment,
  },
    {
    title: 'Maintenance',
    icon: gear,
    picture: maintenance,
  },
]

const Switcher = ({ items = ITEMS }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='switcher'>
      <div className="pictureBox">
        <img src={items[selectedIndex].picture} className='picture' alt="illustration" />
      </div>

      <div className="switches">
        {
          items.map((item, index) => (
            <div
              className={`switch ${index === selectedIndex && 'selected'}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={item.icon} className='icon' alt='icon' />{item.title}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Switcher;