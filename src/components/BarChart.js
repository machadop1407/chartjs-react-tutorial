import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
<div>
  <h1 style={{fontSize:"24px",fontFamily:"sans-serif"}}>Queue Metrix Report For Inbound Call</h1>
<Bar data={chartData} />
</div>

  )
  
}

export default BarChart;
