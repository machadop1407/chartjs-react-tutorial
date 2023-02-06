import React from 'react'
import {Bar} from 'react-chartjs-2'

export default function Stackchart() {
    const options = {
        scales: {
             xAxes: [{
                 stacked: true
             }],
             yAxes: [{
                 stacked: true
             }]
         }
     }
     const arbitraryStackKey = "stack1";

     let data = { 
    //    datasets:[{
    //      label: 'test1',
    //        data :[1]
    //      },
    //      {
    //        label: 'test2',
    //        data:  [2]   
    //      },{
    //         label: 'test1',
    //           data :[1]
    //         },
    //         {
    //           label: 'test2',
    //           data:  [2]   
    //         },{
    //             label: 'test1',
    //               data :[1]
    //             },
    //             {
    //               label: 'test2',
    //               data:  [2]   
    //             }
    //     ],
    
        labels: ['a', 'b', 'c', 'd', 'e'],
        datasets: [
          // These two will be in the same stack.
          {
            stack: arbitraryStackKey,
            label: 'data1',
            borderColor: 'grey',
            borderWidth: 1,
            backgroundColor: 'green',
            data: [1, 2, 3, 4, 5]
          },
          {
            stack: arbitraryStackKey,
            label: 'data2',
            borderColor: 'grey',
            borderWidth: 1,
            backgroundColor: 'blue',
            data: [5, 4, 3, 2, 1]   
          },{
            stack: arbitraryStackKey,
            label: 'data1',
            borderColor: 'grey',
            borderWidth: 1,
            backgroundColor: 'yellow',
            data: [1, 2, 3, 4, 5]
          },
          {
            stack: arbitraryStackKey,
            label: 'data2',
            borderColor: 'grey',
            borderWidth: 1,
            backgroundColor: 'grey',
            data: [5, 4, 3, 2, 1]   
          },{
            stack: arbitraryStackKey,
            label: 'data2',
            borderColor: 'grey',
            borderWidth: 1,
            backgroundColor: 'lightblue',
            data: [5, 4, 3, 2, 1]   
          }
        ],
    
     
     }
     
     
       return  (
       <div style={{ marginTop:"30px"}}>
        <h1 style={{fontSize:"24px",fontFamily:"sans-serif"}}>Abonded Call Profile Report</h1>
        <div style={{width:550}}>
        <Bar style={{marginTop:"60px"}} data={data} options={options} />
        </div>
        
       </div>
       )
    }


