import React from 'react';

const items = [
  {
    name: 'Home',
    id: 'Home'
  },
  {
    name: 'About',
    id: 'about'
  },
  {
    name: 'Previous Work',
    id: 'projects'
  },
  {
    name: 'Tech Stacks',
    id: 'stacks'
  },
  {
    name: 'Contact',
    id: 'contact'
  }
]

const Navigation = (props) => (
  // <>
  //   <div style={social}>
  //     <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/GitHub-Mark-32px.png" /> <a href="https://github.com/morganl92/">Github</a> </span>
  //     <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/linkedin-3-32.png" /> <a href="https://www.linkedin.com/in/morganjunlin/">LinkedIn</a> </span>
  //     <span><img style={image} src="https://mjl-portfolio.s3.us-east-2.amazonaws.com/new-email-black-back-envelope-symbol-of-interface.png" /> <a href="">Email</a></span>
  //   </div>
  // </>
  <nav style={Object.assign({}, flexContainer, flexRow)}>
    {items.map(item => <p style={flexItem}>{item.name}</p>)}
  </nav>
);

const social = {
  textAlign: 'center',
  fontFamily: 'Avenir'
}

const image = {
  width: '16px',
  height: '16px'
}

const flexContainer = {
  padding: '0',
  margin: '0',
  listStyle: 'none',
  display: 'flex',
  backgroundColor: '#1B242F',
  fontFamily: 'Avenir',
  color: 'white',
  padding: '16px',
  textSize: '16px',
  borderBottom: '3px solid #04C2C9'
}
const flexRow = {
  flexDirection: 'row',
  justifyContent: 'center'
}

const flexItem = {
  margin: '5px',
  padding: '5px'
}

export default Navigation;