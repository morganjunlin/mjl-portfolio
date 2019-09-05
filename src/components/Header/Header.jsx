import React from 'react';

const Header = (props) => (
  <>
    <div style={name}>
      Morgan Jun Lin
    </div>

    <div style={social}>
      <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/GitHub-Mark-32px.png" /> <a href="https://github.com/morganl92/">Github</a> </span>
      <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/linkedin-3-32.png" /> <a href="https://www.linkedin.com/in/morganjunlin/">LinkedIn</a> </span>
      <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/new-email-black-back-envelope-symbol-of-interface.png" /> <a href="">Email</a></span>
    </div>
  </>
);

const name = {
  color: 'black',
  backgroundColor: 'white',
  padding: '64px 0 32px 0',
  fontFamily: 'Avenir',
  fontSize: '96px',
  textAlign: 'center',
  textWeight: 'bold'
};

const social = {
  textAlign: 'center',
  fontFamily: 'Avenir'
}

const image = {
  width: '16px',
  height: '16px'
}

export default Header;