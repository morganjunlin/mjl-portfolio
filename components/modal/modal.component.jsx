import React from 'react';

import './modal.styles.scss';

const Modal = ({ showModal, handleModal, project }) => {
  let { title, subtitle, description, images, css } = project;

  if (showModal) {
    return (
      <div className='modal'>
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
            <button>View Code</button>
            <button onClick={() => handleModal(0)}>Close</button>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default Modal;