import React, { useState } from 'react';

import './contact.styles.scss';

const Contact = ({ FadeInSection, contactRef }) => {
  const [status, setStatus] = useState('');

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
        alert('Thank you for your message! I will respond back within 24-48 hours!');
      } else {
        setStatus('ERROR')
      }
    };
    xhr.send(data);
  };

  return (
    <section id='contact' className='contact' ref={contactRef}>
        <center>
          <div className='arrow-up'>
          </div>
        </center>
        
        <h1>
          CONTACT
        </h1>
        
      <FadeInSection domRef={contactRef}>
        <form 
          className='contact-form' 
          method='POST' 
          action='https://formspree.io/xnqvzynq'
          onSubmit={submitForm}
        >
          <div><input type='text' name='name' placeholder='Name' required /></div>
          <div><input type='email' name='email' placeholder='Email' required /></div>
          <div><textarea type='text' id='message' name='message' placeholder='Message' required /></div>
          <div><input type='submit' value='Submit' /></div>
          {status === 'ERROR' && alert('Ooops! There was an error.')}
        </form>
      </FadeInSection>
    </section>
  )
};

export default Contact;