import React, { useState, useEffect }from 'react';

import './modal.styles.scss';

const Modal = ({ showModal, setModal, handleModal, project }) => {
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
    // <div style={Object.assign({}, zIndex: 99, animation: `${showModal ? 'fadeIn' : 'fadeOut'} 0.3s`)} onAnimationEnd={onAnimationEnd}>
      <div className={`modal ${showModal ? 'show' : 'hide'}`} onAnimationEnd={onAnimationEnd}>
        <div className='item'>
          <div className='carousel'>
            <img id={css} src={images[0]} />
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
            <button onClick={() => window.location.href=`${link}`}>View Code</button>
            <button onClick={() => setModal(showModal => !showModal)}>Close</button>
          </div>
        </div>
      </div>
    // </div>
    )
  )
}

export default Modal;