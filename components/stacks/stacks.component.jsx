import React, { Component } from 'react';

import stacks from './stacks.js';
import './stacks.styles.scss';

const Stacks = ({ stacksRef }) => (
  <section id='stacks' className='stacks' ref={stacksRef}>
    <div className='container'>
      <h1>
        TECH STACKS
      </h1>
      <div className='list'>
        {Object.entries(stacks).map(([technology, stacks], i) => {
          // if (i % 2 === 0) {
            return (
                <Stack key={i} technology={technology} stacks={stacks}/> 
            )
          // }
        })}
      </div>
    </div>
  </section>
)

const Stack = ({ technology, stacks }) => (
  <div className='technology'>
    <div>
      <h3>
        {
          technology === 'Deployment' ? 'Deployment / Testing'
          : technology === 'Skills' ? 'Developer Skills'
          : technology
        }
      </h3>
    </div>
    <div className='stack'>
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
  </div>
)

export default Stacks;