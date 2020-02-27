import React, { useState } from 'react';

import './projects.styles.scss';

const Projects = ({ projectsRef, handleModal, productJSON }) => {
  const [mask, setMask] = useState(false);
  const [maskID, setMaskID] = useState();

  const handleMask = (i) => {
    setMask(prevState => !prevState)
    setMaskID(i)
  };

  return (
    <section id='projects' className='projects' ref={projectsRef}>
      <h1 className='title'>
        APPLICATIONS
      </h1>
      
      <div className='container'>
        {productJSON.map((product, i) => {
          let { title, subtitle, stacks, css } = product

          return (
            <div className='item' key={i}>
              {mask && maskID === i ? 
                <div className='mask' onMouseLeave={() => handleMask(i)}>
                  <div className='mask-item'>
                    <h1>{title}</h1>
                    <h4>{stacks}</h4>
                    <button onClick={() => {handleModal(i); handleMask(i)}}>
                      View Project
                    </button>
                  </div>
                </div> : null}
              <div id={css} className='project' onMouseOver={() => handleMask(i)}>
              </div>
              <div className='description'>
                <h2>{title}</h2>
                <h4><em>{subtitle}</em></h4>
              </div>
            </div>
          )})}
      </div>
    </section>
  )
}


export default Projects;