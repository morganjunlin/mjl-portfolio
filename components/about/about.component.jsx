import React from 'react';

import './about.styles.scss';

const About = ({ aboutRef }) => (
  <section id='about' className='about' ref={aboutRef}>
    <h1 className='title'>
      ABOUT
    </h1>
    <div className='container'>
      <div>
        <img className='profile-pic' src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/IMG_4755.jpeg' />
      </div>

      <div className='item speech-bubble'>
        <p>
          Hey there, Morgan here! I'm a full-stack software engineer that's driven by the sheer desire to help people solve problems. I have a passion to stay up-to-date and learning the latest technologies, as well as polish my existing skills to better my craft.
        </p>
        <p>
          My current tech-related interests are, and have been for the last decade, the evolution of smartphones and how we as a society interact with them, as well as FinTech and its relation and use-cases with smartphones. I find it very fascinating to see how far we've come since the first iPhone was released, and it is always exciting to see how we as a society adapt and continue to grow as the smartphone era matures.
        </p>
        <p>
          When I'm not thinking about tech, things I like to do for fun and leisure is exploring the outside world through photography, eating delicious foods at new restaurants, socializing with pals, or the occasional light gaming.
        </p>
      </div>
    </div>
  </section>
);

export default About;