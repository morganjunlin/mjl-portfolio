import React, { useState, useEffect } from 'react';

import './projects.styles.scss';

const Projects = ({ projectsRef, handleModal, productJSON }) => {
  const [mask, setMask] = useState(false);
  const [maskID, setMaskID] = useState();
  const [render, setRender] = useState(mask);

  useEffect(() => {
    if (mask) setRender(true);
  }, [mask]);

  const onAnimationEnd = () => {
    if (!mask) setRender(false);
  };

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
              {render && maskID === i && ( 
                <div className={`mask ${mask ? 'show' : 'hide'}`} onMouseLeave={() => handleMask(i)} onAnimationEnd={onAnimationEnd}>
                  <div className='mask-item'>
                    <h1>{title}</h1>
                    <h4>{stacks}</h4>
                    <button onClick={() => handleModal(i)}>
                      View Project
                    </button>
                  </div>
              </div>)}
              <div id={css} className='project' onMouseEnter={() => handleMask(i)}>
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