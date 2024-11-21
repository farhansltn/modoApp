// CustomToast.js
import React from "react";

const CustomToast = ({ closeToast, onConfirm }) => {
  return (
    <div className="flex flex-col px-4 py-1">
      <p className="text-md font-bold">Are you sure you want to proceed?</p>
      <div className="flex flex-row justify-between mt-6 gap-x-6">
        <button
          onClick={() => {
            onConfirm();
            closeToast();
          }}
          className="bg-green-500 text-white px-8 py-2 rounded"
        >
          Yes
        </button>
        <button
          onClick={closeToast}
          className="bg-red-500 text-white px-8 py-2 rounded"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default CustomToast;
