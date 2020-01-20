import React from 'react';

const Projects = (props) => (
  <div style={style}>
    <p style={title}>
      Projects
    </p>

    {/* do some kind of grid here for 3 projects */}

    <p style={subtitle}>
      Platonic.ly: Event Finder Social Media Application
    </p>
    <div style={Object.assign({}, flexContainer, flexRow)}>
      <div style={flexItem}>
        <ul>
          <li>Provided users with multiple sign-in options, including Facebook, by utilizing OAuth 2.0 as the authentication protocol</li>
          <li>Routed individual user profile pages to be viewed from event listings with React Navigation, as well as dynamically render events the user is attending</li>
          <li>Designed relational database schema for complex SQL operations while adhering to RESTful API</li>
        </ul>
      </div>
      <div style={flexItem}>
        <iframe src='https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?device=nexus5&launchUrl=https%3A%2F%2Fexpo.io%2F%40morganjunlin%2Fplatonicly&pc=&screenOnly=false&autoplay=false&embed=true&xdocMsg=true&xDocMsg=true&debug=true&deviceColor=black&orientation=portrait&params=%7B%22EXKernelLaunchUrlDefaultsKey%22%3A%22https%3A%2F%2Fexpo.io%2F%40morganjunlin%2Fplatonicly%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D' width='378px' height='800px' frameborder='0' scrolling='no'></iframe>
      </div>
    </div>

    

    <p style={subtitle}>
      Grubhub Legacy UX Clone System Optimization
    </p>
    <div style={Object.assign({}, flexContainer, flexRow)}>
      <div style={flexItem}>
        <ul>
          <li>Optimized database to handle queries containing over 10,000,000 records by indexing the database to the data’s lookup ID to allow for faster lookup</li>
          <li>Increased throughput queries of 1000 rps to 2000 rps with a latency of 15 ms for 1 minute by horizontally scaling the service to 3 deployed EC2 instances for scalability</li>
          <li>Load-balancing traffic using NGINX through continuous testing for stability of heavy incoming user traffic using load tester tools such as Artillery.io and Loader.io</li>
        </ul>
      </div>
      <div style={flexItem}>
        <img style={img} src='https://matthew-mata.herokuapp.com/imgs/grubhub.gif' />
      </div>
    </div>

    <p style={subtitle}>
      Nordstrom UX Clone
    </p>
    <div style={Object.assign({}, flexContainer, flexRow)}>
      <div style={flexItem}>
        <ul>
          <li>Recreated functionality of the nav-items by storing individual department into categories and mathematically dividing these categories through CSS widths and floats</li>
          <li>Incorporated a micro-service architecture to isolate maintainability of data and error handling</li>
          <li>Recreated the search bar by conditionally rendering search results based on keywords drawn from self-generated data within MongoDB and speeding up search times by indexing user inputted search queries</li>
        </ul>
      </div>
      <div style={flexItem}>
        <img style={img} src='https://matthew-mata.herokuapp.com/imgs/nordstrom.gif' />
      </div>
    </div>
  </div>
)

const style = {
  // padding: '64px 512px',
  fontFamily: 'Avenir'
}

const title = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '24px',
}

const subtitle = {
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center'
}

const flexContainer = {
  padding: '0',
  margin: '0',
  listStyle: 'none',
  display: 'flex',
  // alignContent: 'center'
}
const flexRow = {
  flexDirection: 'row',
  justifyContent: 'space-between'
}

const flexItem = {
  // margin: '5px',
  // padding: '5px',
  flexGrow: '1'
}

const img = {
  // height:'50%',
  width:'70%'
}

export default Projects;