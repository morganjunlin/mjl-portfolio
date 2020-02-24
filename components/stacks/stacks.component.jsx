import React, { Component } from 'react';

import stacks from './stacks.js';
import './stacks.styles.scss';

const Stacks = ({ stacksRef }) => (
  <section id='stacks' className='stacks' ref={stacksRef}>
    <div className='container'>
      <h1>
        TECH STACKS
      </h1>

      {Object.entries(stacks).map(([technology, stacks], i) => <Stack key={i} technology={technology} stacks={stacks}/>)}
    </div>
  </section>
)

const Stack = ({ technology, stacks }) => (
  <>
    <h3>
      {
        technology === 'Deployment' ? 'Deployment / Testing'
        : technology === 'Skills' ? 'Developer Skills'
        : technology
      }
    </h3>
    <div className='technology'>
      {stacks.map((stack, i) => {
        const { id, name, image } = stack;
        return (
          <div key={i} className='item'>
            <img 
              className='icon' 
              src={image} 
              id={id}
            /> <br />
            <span>{name}</span>
          </div>
        )
      })}
    </div>
  </>
)

export default Stacks;