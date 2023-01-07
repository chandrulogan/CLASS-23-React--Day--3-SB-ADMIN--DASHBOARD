import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Direct', 'Referral', 'Social'],
  datasets: [
    {
      label: '# of Votes',
      data: [55, 30, 15],
      backgroundColor: [
        'rgb(78,115,223)',
        'rgb(28,200,138)',
        'rgb(54,185,204)',
      ],
      pointBorderWidth: 1,
      borderColor: [
        'rgb(255,255,255)',
      ],
      borderWidth: 2,
      width: '50%',
      cutout: '80%'
    },
  ],
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

export function PieChart() {
  return <Doughnut data={data} options={options} width={400}/>;
}
