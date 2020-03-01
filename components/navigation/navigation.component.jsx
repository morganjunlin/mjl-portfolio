import React from 'react';

import items from './items.js';
import './navigation.styles.scss';

const Navigation = (props) => {
  const { visibleSection, navigationRef, scrollTo } = props

  return (
    <div className='sticky'>
      <nav className='navigation' ref={navigationRef}>
        {
          items.map((item, i) => {
            const { name, id } = item;

            return (
              <button 
                type='button' 
                key={i} 
                className={`item ${visibleSection === id ? 'selected' : ''}`}
                onClick={() => scrollTo(props[id + 'Ref'].current)}>
                  {name}
              </button>
            )
          })
        }
      </nav>
    </div>
  )
}

export default Navigation;