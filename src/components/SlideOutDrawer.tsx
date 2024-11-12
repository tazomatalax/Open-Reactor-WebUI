import React, { useState } from 'react';

const SlideOutDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="slide-out-drawer">
      <button
        onClick={toggleDrawer}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className={`bg-white shadow-lg rounded-lg p-4 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <h2 className="text-lg font-bold mb-2">Detailed Settings</h2>
        <div className="space-y-2">
          <div>
            <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">
              Temperature
            </label>
            <input
              type="number"
              id="temperature"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="pH" className="block text-sm font-medium text-gray-700">
              pH
            </label>
            <input
              type="number"
              id="pH"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          {/* Add more settings here */}
        </div>
      </div>
    </div>
  );
};

export { SlideOutDrawer };
