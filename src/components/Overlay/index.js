import React from 'react'
import './style.css';

const Overlay = ({children, overlayClick}) => {
  return (
    <div className="Overlay" onClick={() => overlayClick()}>
      {children}
    </div>
  )
}

export default Overlay