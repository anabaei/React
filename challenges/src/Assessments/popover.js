import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <>
          <div className="modal-overlay" />
          <div className="modal">
            <div className="modal-content">
              <h2>Modal Title</h2>
              <p>Modal Content</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
