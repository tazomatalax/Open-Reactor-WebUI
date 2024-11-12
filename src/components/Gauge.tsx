import React from 'react';
import { CircularProgressbar, buildStyles } from 'recharts';

interface GaugeProps {
  value: number;
  min: number;
  max: number;
}

const Gauge: React.FC<GaugeProps> = ({ value, min, max }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="gauge">
      <CircularProgressbar
        value={percentage}
        text={`${value}`}
        styles={buildStyles({
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export { Gauge };
