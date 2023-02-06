import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(75,192,192,1)",
          "blue",
          "#50AF95",
          "#f3ba2f",
           "#2a71d0",
      ],
      borderWidth: 1,
    },  
  ],
};

export default function DoughnutChart() {
  return(
    <div>
        <h1 style={{fontSize:"24px",fontFamily:"sans-serif"}}>Queue Out Bound Performance Report</h1>
        <Doughnut data={data} />

    </div>
  ) 
  
}
