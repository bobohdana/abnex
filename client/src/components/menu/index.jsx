import React from 'react';
import './style.scss';

const Menu = ({ children, items }) => {
  return (
    <div className='anchor'>
      {children}

      <div className='menu'>{
        items.map((item) => (
          <div className='item' onClick={item.action}>
            {item.title}
          </div>
        ))
      }</div>
    </div>
  )
}

export default Menu;