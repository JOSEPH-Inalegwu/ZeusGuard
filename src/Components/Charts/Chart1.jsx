import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart1 = ({ data, options }) => {
  return (
    <div style={{ width: '280px', height: '240px' }}>
      <Line options={options} data={data} />
    </div>
  );
}

export default Chart1;