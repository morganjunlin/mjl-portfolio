import React, { Component } from 'react';

import './navigation.styles.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          name: 'HOME',
          id: 'home'
        },
        {
          name: 'ABOUT',
          id: 'about'
        },
        {
          name: 'TECH STACKS',
          id: 'stacks'
        },
        {
          name: 'PROJECTS',
          id: 'projects'
        },
        {
          name: 'CONTACT',
          id: 'contact'
        }
      ]
    }
  }

  render() {
    const { items } = this.state;

    return (
      <nav className='navigation'>
        {
          items.map((item, i) => 
            <a 
              key={i} 
              className={i === 0 ? 'selected item' : 'item'}
              onClick={() => window.location.href=`#${item.id}`}
            >{item.name}</a>)
        }
      </nav>
    )
  }
}


export default Navigation;