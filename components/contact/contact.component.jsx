import React from 'react';

import './contact.styles.scss';

const Contact = ({ contactRef }) => (
  <section id='contact' className='contact' ref={contactRef}>
    <h1>
      CONTACT
    </h1>

    <div>
      <img src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/email-13.svg' />
      <img src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/linkedin-3.svg' onClick={() => window.location.href='https://www.linkedin.com/in/morganjunlin/'} />
      <img src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/github-1.svg' onClick={() => window.location.href='https://github.com/morganjunlin/'}/>
    </div>
  </section>
)

export default Contact;