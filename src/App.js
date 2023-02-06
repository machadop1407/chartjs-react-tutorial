import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import DoughnutChart from './components/DoughnutChart'
import HorizontalBarChart from './components/HorizontalChart'
import Images from './components/ImageMain'
import Stackchart from './components/Stackchart'
import MultiLineChart from './components/MultiLineGraph'
import BarchartWithLineChart  from './components/BarchartWithLineGraph'


export default function App() {
  const  options =  {scales: {
    yAxes: [{
      gridLines: {
        display: false,
      },
    }]
  }}

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
   
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "blue",
          "#50AF95", 
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "grey",
        borderWidth: 2,
      },
    ],
  });

 

  return (
    <div className="App">
         <Images />
      <div className=" graphContainer">
      <div className="graph" style={{ width: 700 }}>
        <BarChart options={options} chartData={userData} />
      </div>
      <div className="graph"style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      </div>
      <div className="graphContainer">
      <div className="graph3" style={{ width: 450 }}>
        <PieChart chartData={userData} />
      </div>
      <div className="graph4" style={{ width: 450 }}>
        <DoughnutChart chartData={userData} />
      </div>
      </div>
      {/* <Stackcharts style={{width:450}}/> */}
     <div className= "graph6" >
     <HorizontalBarChart chartData={userData} />
  
  <Stackchart chartData={userData}/>
     </div>
     <div className="graph6">
     <div style={{ width: 550 }}>
     <MultiLineChart />
     </div>
     <div style={{ width: 550 }}>
      <BarchartWithLineChart />
     </div>
     </div>
     
     
      
   
    
    </div>
  );
}


