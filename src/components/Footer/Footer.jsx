import React from 'react';

const Footer = (props) => (
  <div style={style}>
    <p style={title}>Footer</p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae risus a diam placerat sagittis. Vestibulum vulputate, sem ac ultrices imperdiet, risus massa lacinia eros, in sodales velit diam sit amet metus. Etiam a dolor maximus, venenatis quam sit amet, lobortis leo. Integer ut iaculis nibh, a viverra mauris. Duis mattis a odio sed dapibus. Cras vulputate erat commodo dui aliquam placerat. Nullam malesuada mauris vitae condimentum maximus. 
    </p>
  </div>
)

const style = {
  padding: '64px 512px 16px 512px',
  fontFamily: 'Avenir'
}

const title = {
  textAlign: 'center',
  fontWeight: 'bold'
}

export default Footer;