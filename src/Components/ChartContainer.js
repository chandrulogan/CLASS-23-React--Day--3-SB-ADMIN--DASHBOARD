import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan",'', "Mar",'', "May",'', "Jul",'', "Sep",'', "Nov",''],
  datasets: [
    {
      label: "First dataset",
      data: [0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000],
      fill: true,
      backgroundColor: 'rgb(78,115,223)',
      borderColor: 'rgb(78,115,223)',
      lineTension: 0.4
    }
  ]
};

const options = {
  clip:0,
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
};

export default function App() {
  return (
    
      <Line data={data} options={options} />
    
  );
}
