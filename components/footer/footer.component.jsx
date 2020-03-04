import React from 'react';

import './footer.styles.scss';

const Footer = () => (
  <section className='footer'>
    <p>
      Made by Morgan. 2019-2020.
    </p>
    <div>
      <img className='img' src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/email-13.svg' />
      <img className='img' src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/linkedin-3.svg' onClick={() => window.location.href='https://www.linkedin.com/in/morganjunlin/'} />
      <img className='img' src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/github-1.svg' onClick={() => window.location.href='https://github.com/morganjunlin/'}/>
    </div>
  </section>
)

export default Footer;