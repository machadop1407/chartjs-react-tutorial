import React from 'react';
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: ['rgba(75,192,192,1)','green','lightGreen','blue','yellow'],
      borderColor: 'grey',
      borderWidth: 2,
      data: [25, 59, 40, 81, 36]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div style={{width: 550, marginTop:"60px"}}>
        <h1 style={{fontSize:"24px",fontFamily:"sans-serif"}}>Queue Metrics Interval Report</h1>
        <Bar
          data={state}
          options={{
            indexAxis:'y',
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}