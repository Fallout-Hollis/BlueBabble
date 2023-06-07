import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="relative bg-blue-200 rounded p-4">
        {children}
        <button
          className="absolute bottom-2 right-4 text-white hover:text-blue-700 bg-red-600 rounded px-4 py-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
