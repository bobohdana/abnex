import React, { useState } from 'react';
import './style.scss';

const Menu = ({ children, items, isMobile }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  const onHover = () => setOpen(true);
  const onUnhover = () => setOpen(false);

  return (
    <div
      className='anchor'
      onClick={handleClick}
      onMouseEnter={onHover}
      onMouseLeave={onUnhover}
    >
      {children}

      <div
        className={`menu ${isMobile && 'isMobile'} `}
        style={{ display: open ? 'block' : 'none' }}
      >{
        items.map((item, index) => (
          <div className='item' onClick={item.action} key={index}>
            {item.title}
          </div>
        ))
      }</div>
    </div>
  )
}

export default Menu;