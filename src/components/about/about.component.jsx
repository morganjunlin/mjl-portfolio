import React from 'react';

const About = (props) => (
  <div id='about' style={style}>
    <p style={title}>
      About Me
    </p>

    <p>
      I’ve always been fascinated and intrigued with website design growing up, down to manipulating existing website designs as well as dissecting the inner workings of particular website layouts. My interest has put me into a path from learning to dissect web applications to now being able to create applications from scratch. Throughout this journey, I have dabbled in older technology stacks such as Linux, Apache, MySQL, and PHP, and have recently become in expertise in newer, popular, technology stacks such as MongoDB, Express, ReactJS, and NodeJS. I’ve also learned along the way how fun collaborative work on tech applications can be -- to be able to share and feed ideas helps me to grow as an engineer as well as become more perceptive creatively and I would like to integrate into a team where we can all create together.
    </p>
  </div>
);

const style = {
  // padding: '64px 512px 16px 512px',
  fontFamily: 'Avenir'
}

const title = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '24px'
}

const subtitle = {
  textAlign: 'center'
}

export default About;