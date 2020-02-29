import React, { useState } from 'react';

import './contact.styles.scss';
// import send from './send.php';

const Contact = ({ contactRef }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('')

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

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
  }

  return (
    <section id='contact' className='contact' ref={contactRef}>
      <center>
        <div className='arrow-up'>
        </div>
      </center>
      
      <h1>
        CONTACT
      </h1>
      
      <form 
        className='contact-form' 
        method='POST' 
        action='https://formspree.io/xnqvzynq'
        onSubmit={submitForm}
      >
        <div><input type='text' id='name' name='name' placeholder='Name' onChange={handleNameChange} required /></div>
        <div><input type='email' id='email' name='email' placeholder='Email' onChange={handleEmailChange} required /></div>
        <div><textarea type='text' id='message' name='message' placeholder='Message' onChange={handleMessageChange} required /></div>
        <div><input type='submit' id='submit' value='Submit' /></div>
        {status === 'ERROR' && alert('Ooops! There was an error.')}
      </form>
    </section>
  )
}

export default Contact;