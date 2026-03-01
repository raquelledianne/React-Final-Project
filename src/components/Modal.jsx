import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


function Modal({ isOpen, toggleModal, contact }) {
  return (
    <div
      className="modal__overlay"
      style={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden"
      }}
    >
      <div
        className="modal"
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transform: isOpen
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0.8)"
        }}
      >
        <FontAwesomeIcon icon={ faXmark } className="modal__exit click" onClick={toggleModal} />

        <h3 className="modal__title">Get in Touch!</h3>

        <form onSubmit={contact} id="contact__form">
          <div className="form__item">
            <label>Name</label>
            <input name="user_name" type="text" required />
          </div>

          <div className="form__item">
            <label>Email</label>
            <input name="user_email" type="email" required />
          </div>

          <div className="form__item">
            <label>Message</label>
            <textarea name="message" required></textarea>
          </div>

          <button className="form__submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;