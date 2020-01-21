import React from 'react';

const Contact = (props) => (
  <section id='contact' style={style}>
    <p style={title}>
      Contact Me
    </p>

    <div>
      <input type='text' placeholder='Your name' />
      <input type='text' placeholder='Your email' />
      <input type='text' placeholder='Message' style={{height: '200px'}} />
      <input type='submit' value='Submit' />
    </div>
  </section>
)

const style = {
  padding: '64px 512px 16px 512px',
  // fontFamily: 'Avenir'
}

const title = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '24px',
}

export default Contact;