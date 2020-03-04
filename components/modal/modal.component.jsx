import React, { useState, useEffect }from 'react';

import './modal.styles.scss';

const Modal = ({ showModal, setModal, project }) => {
  let { title, subtitle, description, images, css, link } = project;

  const [render, setRender] = useState(showModal);

  useEffect(() => {
    if (showModal) setRender(true);
  }, [showModal]);

  const onAnimationEnd = () => {
    if (!showModal) setRender(false);
  };

  return (
    render && (
      <div className={`modal ${showModal ? 'show' : 'hide'}`} onAnimationEnd={onAnimationEnd}>
        <div className='item'>
          <div className='presentation'>
            <img className={`${css === 'mvp' ? 'mvp' : 'img'}`} src={images[0]} />
          </div>
          <div className='description'>
            <h1>{title}</h1>
            <h3><em>{subtitle}</em></h3>
            <hr />
            <ul>
              {description.map((bullet, i) => <li key={i}>{bullet}</li>)}
            </ul>
          </div>
          <div className='bottom-nav'>
            <button className='btn' onClick={() => window.location.href=`${link}`}>View Code</button>
            <button className='btn' onClick={() => setModal(showModal => !showModal)}>Close</button>
          </div>
        </div>
      </div>
    )
  )
};

export default Modal;