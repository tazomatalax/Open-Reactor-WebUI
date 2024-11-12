import React from 'react';

interface StatusIndicatorProps {
  status: 'normal' | 'warning' | 'alarm';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const statusClasses = {
    normal: 'status-normal',
    warning: 'status-warning',
    alarm: 'status-alarm',
  };

  return (
    <div className={`status-indicator ${statusClasses[status]}`}></div>
  );
};

export { StatusIndicator };
