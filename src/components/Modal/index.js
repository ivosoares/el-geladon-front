import React from 'react'
import Overlay from './../Overlay';
import './style.css';

const Modal = ({ children, closeModal }) => {

  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if(canClose) closeModal();
  }

  return (
    <Overlay overlayClick={closeModal}>
      <div className='Modal' onClick={handleClick}>
        <span className='Modal__close' onClick={(e) => handleClick(e, true)}>+</span>
        <div className='Modal__body'>
          {children}
        </div>
      </div>
    </Overlay>
  )
}

export default Modal