import React, { useState } from 'react';

const EmergencyStop: React.FC = () => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleEmergencyStop = () => {
    if (isConfirming) {
      // Implement emergency stop logic here
      console.log('Emergency stop confirmed!');
      setIsConfirming(false);
    } else {
      setIsConfirming(true);
    }
  };

  return (
    <button
      onClick={handleEmergencyStop}
      className="emergency-stop"
    >
      {isConfirming ? 'Confirm Stop' : 'Emergency Stop'}
    </button>
  );
};

export { EmergencyStop };
