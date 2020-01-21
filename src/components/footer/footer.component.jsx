import React from 'react';

const Footer = (props) => (
  <section style={style}>
    <p style={title}>Footer</p>

      {/* // <>
  //   <div style={social}>
  //     <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/GitHub-Mark-32px.png" /> <a href="https://github.com/morganl92/">Github</a> </span>
  //     <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/linkedin-3-32.png" /> <a href="https://www.linkedin.com/in/morganjunlin/">LinkedIn</a> </span>
  //     <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/new-email-black-back-envelope-symbol-of-interface.png" /> <a href="">Email</a></span>
  //   </div>
  // </> */}

    <p style={{textAlign: 'center'}}>
      Made by Morgan. 2019-2020.
    </p>
  </section>
)

const style = {
  padding: '64px 512px 16px 512px',
  // fontFamily: 'Avenir'
}

const title = {
  textAlign: 'center',
  fontWeight: 'bold'
}

const image = {
  width: '16px',
  height: '16px'
};

export default Footer;