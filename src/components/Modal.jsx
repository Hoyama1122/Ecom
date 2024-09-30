import React from "react";

const Modal = ({ isModalOpen, setisModalOpen, children }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {/* ปรับตำแหน่งของปุ่มปิด */}
        <button
          onClick={() => setisModalOpen(false)}
          className="absolute top-2 right-2 text-gray-500 text-2xl hover:text-gray-700 focus:outline-none"
        >
         
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
