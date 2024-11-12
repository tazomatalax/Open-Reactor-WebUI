import React, { useState } from 'react';

interface InputGroupProps {
  value: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleIncrement = () => {
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setInputValue((numericValue + 1).toString());
    }
  };

  const handleDecrement = () => {
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setInputValue((numericValue - 1).toString());
    }
  };

  return (
    <div className="input-group">
      <button onClick={handleDecrement} className="px-2 py-1 bg-gray-200 rounded-l">
        -
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-20 text-center border-t border-b"
      />
      <button onClick={handleIncrement} className="px-2 py-1 bg-gray-200 rounded-r">
        +
      </button>
    </div>
  );
};

export { InputGroup };
