import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SparklineProps {
  data: number[];
}

const Sparkline: React.FC<SparklineProps> = ({ data }) => {
  const chartData = data.map((value, index) => ({ time: index, value }));

  return (
    <div className="sparkline">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" hide={true} />
          <YAxis domain={['dataMin', 'dataMax']} hide={true} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export { Sparkline };
