import React from "react";
import { Pie } from "react-chartjs-2";
// import { Chart  } from "chart.js/auto";

function PieChart({ chartData }) {
  return(
    <div>
      <h1 style={{fontSize:"24px",fontFamily:"sans-serif"}}>Queue Outbound Performance Report</h1>
      <Pie data={chartData} />
    </div>
  ) 
}

export default PieChart;
