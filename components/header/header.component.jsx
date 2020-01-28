import React from 'react';

import './header.styles.scss';

const Header = (props) => (
  <section id='header' className='header'>
    <div className='caption'>
      <div className='item'>
        <span className='name border'>
          Morgan Jun Lin
        </span>
      </div>
      <div className='item'>
        <span className='border'>
          Full-Stack Software Engineer
        </span>
      </div>
    </div>
  </section>
);

export default Header;