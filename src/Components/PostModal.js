import React from "react";

const PostModal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="relative bg-blue-400 rounded p-4">{children}</div>
    </div>
  );
};

export default PostModal;
