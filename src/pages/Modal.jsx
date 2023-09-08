import React from 'react'
import '../css/modal.css'

function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" >
          &times;
        </button>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, eum.
        </p>
      </div>
    </div>
  )
}

export default Modal