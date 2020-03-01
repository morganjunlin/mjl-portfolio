import React from 'react';

import './about.styles.scss';

const About = ({ FadeInSection, aboutRef }) => (
  <section id='about' className='about' ref={aboutRef}>
      <h1 className='title'>
        ABOUT
      </h1>
      
    <FadeInSection domRef={aboutRef}>
      <div className='container'>
        <div>
          <img className='profile-pic' src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/IMG_4755.jpeg' />
        </div>

        <div className='item speech-bubble'>
          <p>
            Hey there, Morgan here! I'm a full-stack software engineer that's driven by the sheer desire to help people solve problems. My passion is to remain up-to-date with current trends, and learn the latest technology to polish my existing skills to further improve my craft.
          </p>
          <p>
            My current tech-related interest is, and has been for the last decade, in the evolution of smartphones and our interactions with them. For instance, I am extremely fascinated with FinTech’s growth and its relation and use-cases with smartphones. It is incredible to witness how far we have come ever since the release of the first iPhone, and how we, as a society, adapt and grow as technological innovations continue to revolutionize the industry. 
          </p>
          <p>
            When I'm not thinking about tech, things I like to do for fun and leisure is exploring the outside world by taking photographs, eating delicious foods at new restaurants, socializing with pals, or occasionally playing video games.
          </p>
        </div>
      </div>
    </FadeInSection>
  </section>
);

export default About;