import React from 'react';

const frontend = [
  'Javascript (ES5 and ES6)',
  'HTML5',
  'CSS3',
  'React',
  'React Native'
]

const backend = [
  'Node.js',
  'Express',
  'MongoDB',
  'Mongoose',
  'PostgreSQL',
  'MySQL',
  'Sequelize',
]

const deployment = [
  'AWS S3 & EC2',
  'NGINX',
  'Heroku',
  'Artillery',
  'Loader',
  'New Relic'
]

const skills = [
  'Git',
  'yarn',
  'npm',
  'Webpack',
  'Babel',
  'Agile',
  'Kanban'
]

const Stacks = (props) => (
  <div id='stacks' style={style}>
    <p style={title}>
      Technical Stacks
    </p>

    <p style={subtitle}>
      Frontend
    </p>
    <div style={Object.assign({}, flexContainer, flexRow)}>
      {frontend.map((stack => <p style={flexItem}>{[stack]}</p>))}
    </div>

    <p style={subtitle}>
      Backend
    </p>
    <div style={Object.assign({}, flexContainer, flexRow)}>
      {backend.map((stack => <p style={flexItem}>{[stack]}</p>))}
    </div>

    <p style={subtitle}>
      Deployment / Testing
    </p>
    <div style={Object.assign({}, flexContainer, flexRow)}>
      {deployment.map((stack => <p style={flexItem}>{[stack]}</p>))}
    </div>

    <p style={subtitle}>
      Developer Skills
    </p>
    <div style={Object.assign({}, flexContainer, flexRow)}>
      {skills.map((stack => <p style={flexItem}>{[stack]}</p>))}
    </div>
  </div>
)

const style = {
  // padding: '64px 512px 16px 512px',
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
  display: 'flex'
}
const flexRow = {
  flexDirection: 'row',
  justifyContent: 'center'
}

const flexItem = {
  margin: '5px',
  padding: '5px',
}




export default Stacks;