import React, { useState } from 'react';

import './contact.styles.scss';
// import send from './send.php';

const Contact = ({ contactRef }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <section id='contact' className='contact' ref={contactRef}>
      <center>
        <div className='arrow-up'>
        </div>
      </center>
      
      <h1>
        CONTACT
      </h1>
      
      <form className='contact-form' method='POST' action='./send.php'>
        <div><input type='text' id='name' name='name' placeholder='Name' onChange={handleNameChange} /></div>
        <div><input type='text' id='email' name='email' placeholder='Email' onChange={handleEmailChange} /></div>
        <div><textarea type='text' id='message' name='message' placeholder='Message' onChange={handleMessageChange} /></div>
        <div><input type='submit' id='submit' value='Submit' /></div>
      </form>
    </section>
  )
}

export default Contact;