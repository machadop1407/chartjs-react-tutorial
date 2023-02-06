import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart} from "chart.js/auto";

function LineChart({ chartData }) {
  return(
    <div>
      <h1 style={{fontSize:"24px",fontFamily:"sans-serif"}}>Abonded Call Profile Report</h1>
      <Line data={chartData} />
    </div>
  ) 
}

export default LineChart;
