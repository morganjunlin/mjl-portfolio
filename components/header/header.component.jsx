import React from 'react';

import './header.styles.scss';

const Header = ({ getDimensions, homeRef, navigationRef }) => {
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  window.addEventListener('DOMContentLoaded', () => {
    let { height } = getDimensions(navigationRef.current)
    document.documentElement.style.setProperty('--nh', `${height}px`);
  });

  return (
    <section id='header' className='header' ref={homeRef}>
      <div className='container'>
        <div className='item'>
          <span className='text name'>
            Morgan Jun Lin
          </span>
        </div>
        <div className='item'>
          <span className='text'>
            Software Engineer
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;