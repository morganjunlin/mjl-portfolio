import React from 'react';

import './projects.styles.scss';

const Projects = (props) => (
  <section id='projects' className='projects'>
    <h1 className='title'>
      APPLICATIONS
    </h1>

    <h3 className='title'>
      Platonic.ly: Event Finder Social Media Application
    </h3>
    <div className='container'>
      <div className='item'>
        <ul>
          <li>Provided users with multiple sign-in options, including Facebook, by utilizing OAuth 2.0 as the authentication protocol</li>
          <li>Routed individual user profile pages to be viewed from event listings with React Navigation, as well as dynamically render events the user is attending</li>
          <li>Designed relational database schema for complex SQL operations while adhering to RESTful API</li>
        </ul>
        <div className='btn-container'>
          <input type='button' value='View on GitHub' onClick={() => window.location.href='https://github.com/morganjunlin/platonic.ly'}/>
        </div>
      </div>
      <div className='item'>
        <iframe src='https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?device=nexus5&launchUrl=https%3A%2F%2Fexpo.io%2F%40morganjunlin%2Fplatonicly&pc=&screenOnly=false&autoplay=false&embed=true&xdocMsg=true&xDocMsg=true&debug=true&deviceColor=black&orientation=portrait&params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22https%3A%2F%2Fexpo.io%2F%40morganjunlin%2Fplatonicly%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D' width='378px' height='800px' frameBorder='0' scrolling='no'></iframe>
      </div>
    </div>

    

    <h3 className='title'>
      Grubhub Legacy UX Clone System Optimization
    </h3>
    <div className='container'>
      <div className='item'>
        <img className='gif' src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/grubhub.gif' />
      </div>
      <div className='item'>
        <ul>
          <li>Optimized database to handle queries containing over 10,000,000 records by indexing the database to the data’s lookup ID to allow for faster lookup</li>
          <li>Increased throughput queries of 1000 rps to 2000 rps with a latency of 15 ms for 1 minute by horizontally scaling the service to 3 deployed EC2 instances for scalability</li>
          <li>Load-balancing traffic using NGINX through continuous testing for stability of heavy incoming user traffic using load tester tools such as Artillery.io and Loader.io</li>
        </ul>
        <div className='btn-container'>
          <input type='button' value='View on GitHub' onClick={() => window.location.href='https://github.com/morganjunlin/time-sponsored'}/>
        </div>
      </div>
    </div>

    <h3 className='title'>
      Nordstrom UX Clone
    </h3>
    <div className='container'>
      <div className='item'>
        <ul>
          <li>Recreated functionality of the nav-items by storing individual department into categories and mathematically dividing these categories through CSS widths and floats</li>
          <li>Incorporated a micro-service architecture to isolate maintainability of data and error handling</li>
          <li>Recreated the search bar by conditionally rendering search results based on keywords drawn from self-generated data within MongoDB and speeding up search times by indexing user inputted search queries</li>
        </ul>
        <div className='btn-container'>
          <input type='button' value='View on GitHub' onClick={() => window.location.href='https://github.com/tormund-and-big-lady/nav-bar-service'}/>
        </div>
      </div>
      <div className='item'>
        <img className='gif' src='https://mjl-portfolio.s3.us-east-2.amazonaws.com/nordstrom.gif' />
      </div>
    </div>
  </section>
)

export default Projects;