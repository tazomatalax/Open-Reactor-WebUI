import React, { useState } from 'react';

const Fab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fab">
      <button onClick={toggleFab} className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
        {isOpen ? 'Close' : 'Menu'}
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-4 bg-white shadow-lg rounded-lg p-2">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Option 1</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Option 2</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Option 3</button>
        </div>
      )}
    </div>
  );
};

export { Fab };
