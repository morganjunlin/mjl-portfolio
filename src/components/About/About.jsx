import React from 'react';

const About = (props) => (
  <div style={style}>
    <p style={title}>
      About Me
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae risus a diam placerat sagittis. Vestibulum vulputate, sem ac ultrices imperdiet, risus massa lacinia eros, in sodales velit diam sit amet metus. Etiam a dolor maximus, venenatis quam sit amet, lobortis leo. Integer ut iaculis nibh, a viverra mauris. Duis mattis a odio sed dapibus. Cras vulputate erat commodo dui aliquam placerat. Nullam malesuada mauris vitae condimentum maximus. 
    </p>

    <p>
      Ut elit nunc, efficitur ac facilisis vitae, tempor sed magna. Integer convallis venenatis varius. Nullam porttitor lacus ut ante porttitor, id pulvinar ipsum lobortis. Nulla in gravida dolor. Integer euismod tincidunt ligula a faucibus. Pellentesque non mi id massa auctor rutrum quis at nisi. Aenean tincidunt leo eu consequat volutpat. Vestibulum nec molestie sapien, vitae vulputate ligula. Mauris quis enim nisi. Pellentesque fermentum, leo quis iaculis auctor, felis arcu finibus diam, ut fringilla dolor nulla ut nisl. Cras eleifend enim eget aliquam pellentesque. Donec sed fringilla est.
    </p>
  </div>
);

const style = {
  padding: '64px 512px 16px 512px',
  fontFamily: 'Avenir'
}

const title = {
  textAlign: 'center',
  fontWeight: 'bold'
}

export default About;