import React from 'react';
import { useLocation } from 'react-router';
import { POLICY, LEGACY, TERMS } from '../constants';

const PATHES = {
  '/privacy-policy': POLICY,
  '/terms-and-conditions': TERMS,
  '/legal-notice': LEGACY,
}

const Info = () => {
  const location = useLocation();
  const infos = PATHES[location.pathname];

  const scrollToContent = (id) => {
    const content = document.getElementById(id);
    const header = document.getElementById('header');

    window.scrollTo({ 
      top: content.offsetTop - header.getBoundingClientRect().height,
      behavior: 'smooth' 
    });
  }
  
  return (
    <div className='data padding'>
      <h1>{infos.title}</h1>

      {infos.intro ? (
        <>
          <h3 className='intro'>Introduction</h3>
          <p>{infos.intro}</p>
        </>
      ) : null}

      {infos.isTable ? (
        <div className='table'>
          <h3>Table of contents</h3>
          <ol className="nav">
            {infos.data.map(info => (
              <li key={info.id} onClick={() => scrollToContent(info.id)}>
                {/* <a href={`#${info.id}`}>{info.label}</a> */}
                {info.label}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {infos.data.map((info, index) => (
        <div className={info.label && "item"} key={index}>
          {info.label ? (
            <h3 id={info.id}>{
              location.pathname === '/legal-notice'
                ? info.label
                : index + 1 + '. ' + info.label
            }</h3>
          ) : null}

          <p>{info.text}</p>

          {info.list ? (
            <ul>{info.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}</ul>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default Info;