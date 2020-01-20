import React from 'react';

const Footer = (props) => (
  <div style={style}>
    <p style={title}>Footer</p>

    <p style={{textAlign: 'center'}}>
      Made by Morgan. 2019-2020.
    </p>
  </div>
)

const style = {
  padding: '64px 512px 16px 512px',
  fontFamily: 'Avenir'
}

const title = {
  textAlign: 'center',
  fontWeight: 'bold'
}

export default Footer;