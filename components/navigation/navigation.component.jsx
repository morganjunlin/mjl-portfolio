import React from 'react';

import items from './items.js';
import './navigation.styles.scss';

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Navigation = ({ visibleSection, navigationRef, aboutRef, stacksRef, projectsRef, contactRef}) => (
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
              onClick={() => {scrollTo(homeRef.current)}}>
                {name}
            </button>
          )

        })
          
      }
    </nav>
  </div>
)

export default Navigation;