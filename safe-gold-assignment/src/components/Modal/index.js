import React from "react";
import "./Modal.scss";
import closeButton from "../../assets/close-button.svg";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modalHeader">
          <button className="close-button" onClick={onClose}>
            <img src={closeButton} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
