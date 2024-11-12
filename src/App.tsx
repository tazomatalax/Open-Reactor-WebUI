import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Gauge } from './components/Gauge';
import { Sparkline } from './components/Sparkline';
import { InputGroup } from './components/InputGroup';
import { StatusIndicator } from './components/StatusIndicator';
import { EmergencyStop } from './components/EmergencyStop';
import { Fab } from './components/Fab';
import { SlideOutDrawer } from './components/SlideOutDrawer';
import { Modal } from './components/Modal';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bio-Reactor Control Interface</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard title="Temperature" value="37.5°C" status="normal" />
        <MetricCard title="pH" value="7.2" status="warning" />
        <MetricCard title="Oxygen Level" value="98%" status="alarm" />
        <MetricCard title="Stir Rate" value="150 RPM" status="normal" />
        <MetricCard title="Flow Rate" value="2.5 L/min" status="normal" />
        <MetricCard title="Pressure" value="1.2 bar" status="normal" />
      </div>
      <EmergencyStop />
      <Fab />
      <SlideOutDrawer />
      <Modal />
    </div>
  );
};

const MetricCard: React.FC<{ title: string; value: string; status: 'normal' | 'warning' | 'alarm' }> = ({ title, value, status }) => {
  return (
    <Card className="metric-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="text-4xl font-bold mb-2">{value}</div>
        <Gauge value={parseFloat(value)} min={0} max={100} />
        <Sparkline data={[1, 2, 3, 4, 5]} />
        <InputGroup value={value} />
        <StatusIndicator status={status} />
      </CardContent>
    </Card>
  );
};

export default App;
