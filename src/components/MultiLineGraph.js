import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   PointElement,
// //   LineElement,
// //   Title,
// //   Tooltip,
// //   Legend
// );

export const options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        },
        scaleLabel: {
          display: false
        }
      }
    ]
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  
  
  }

const labels = ['January', 'February', 'March','April', 'May', 'July'];

export const data = {
  labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data:  {
//         id: 1,
//        month:"September",
      
//         userLost: 823,
//       },
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       yAxisID: 'y',
//     },
//     {
//       label: 'Dataset 2',
//       data:  [{
//         id: 1,
//        month:"September",
//         userGain: 80000,
//         userLost: 823,
//       }, {
//         id: 1,
//        month:"January",
//         userGain: 80000,
//         userLost: 823,
//       }],
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       yAxisID: 'y1',
//     },
//   ], data = {

  datasets: [
    {
      label: 'Dataset 1',
      type: 'line',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#742774',
      tension: 0.5
    //   yAxisID: 'y-axis-1'
    },
    {
      label: 'Dataset 2',
      type: 'line',
      data: [21, 86, 12, 48, 15, 96, 19],
      fill: false,
    //   backgroundColor: '#74AC00',
      borderColor: '#74AC00',
      tension: 0.5
    //   yAxisID: 'y-axis-1'
    },{
        label: 'Dataset 2',
        type: 'line',
        data: [30, 36, 52, 68, 25, 66, 39],
        fill: false,
        // backgroundColor: 'grey',
        borderColor: 'blue',
        tension: 0.5
        // yAxisID: 'y-axis-1'
      }, {
        label: 'Dataset 4',
        type: 'line',
        data: [45, 69, 60, 81, 54, 34, 24],
        fill: false,
        borderColor: 'grey',
        tension: 0.5
      //   yAxisID: 'y-axis-1'
      },
      {
        label: 'Dataset 5',
        type: 'line',
        data: [65, 56, 23, 23, 79, 89, 45],
        fill: false,
        // backgroundColor: '#74AC00',
        borderColor: 'black',
        tension: 0.5
      //   yAxisID: 'y-axis-1'
      }
  ]

};

export default function MultiLineChart() {
    return (
        <div>
            <h1  style={{fontSize:"24px",fontFamily:"sans-serif"}}>Multi Line Graph</h1>
            <Line options={options} data={data} />
        </div>
    )
}