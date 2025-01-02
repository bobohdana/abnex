import React, { useEffect, useState } from 'react';

import './style.scss';

const TRANSIT_WIDTH = 1100;
const MOBILE_WIDTH = 750;
const SWITCH_HEIGHT = 96;
const PADDING = 16;
const MARGIN = 570;
const MOBILE_MARGIN = 380;

const Switcher = ({ items, reverse }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [switchHeight, setSwitchHeight] = useState(SWITCH_HEIGHT);

  const cond = window.screen.width < TRANSIT_WIDTH;
  const isMobile = window.screen.width < MOBILE_WIDTH;
  
  useEffect(() => {
    const switchBlock = document.querySelector('.switch');
    if (switchBlock) {
      setSwitchHeight(switchBlock.getBoundingClientRect().height);
    }
  }, [])  

  return (
    <div className={`switcher ${reverse && 'reverse'}`}>
      <div
        className="pictureBox"
        style={ cond 
          ? { top: (selectedIndex + 1) * (switchHeight + PADDING) } 
          : {}
        }
      >
        <img src={items[selectedIndex].picture} className='picture' alt="illustration" />
      </div>

      <div className="switches">
        {
          items.map((item, index) => (
            <div
              key={index}
              className={`switch ${index === selectedIndex && 'selected'}`}
              onClick={() => setSelectedIndex(index)}
              style={(index === selectedIndex && cond) 
                ? { marginBottom: isMobile ? MOBILE_MARGIN : MARGIN } 
                : {}
              }
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