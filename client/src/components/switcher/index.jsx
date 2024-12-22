import React, { useState } from 'react';

import './style.scss';

const Switcher = ({ items, reverse }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={`switcher ${reverse && 'reverse'}`}>
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