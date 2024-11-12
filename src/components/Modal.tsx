import React, { useState } from 'react';

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-lg font-bold mb-4">Confirmation</h2>
            <p>Are you sure you want to proceed?</p>
            <div className="mt-4 flex justify-end">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded mr-2">
                Cancel
              </button>
              <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
