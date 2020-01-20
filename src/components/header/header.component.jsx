import React from 'react';

const Header = (props) => (
  <div id='header' style={container}>
    <div style={caption}>
      <div style={{padding: '12px 0'}}>
        <span style={Object.assign({}, name, border)}>
          Morgan Jun Lin
        </span>
      </div>
      <div style={{padding: '12px 0'}}>
        <span style={border}>
          Full-Stack Software Engineer
        </span>
      </div>
    </div>
  </div>
)

const container = {
  fontFamily: 'Lato',
  backgroundImage: `url('https://thumbs.gfycat.com/IllegalSomberAnhinga-max-1mb.gif')`,
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

const caption = {
  textAlign: 'center',
  color: 'white'
};

const name = {
  // fontSize: '72px',
  // textWeight: 'bold'
};


const border = {
  backgroundColor: '#111',
  padding: '18px',
  fontSize: '25px',
  letterSpacing: '10px'
}

export default Header;