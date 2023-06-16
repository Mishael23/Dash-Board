import React from 'react'
import "../Graph.css";
import { Line } from 'react-chartjs-2'
import{
  Chart as chartJS,
  LineElement,
  CategoryScale,//x-axis
  LinearScale,//y-axis
  PointElement
} from 'chart.js'
import { BorderColor, Height, WidthFull } from '@mui/icons-material';
import { padding } from '@mui/system';

chartJS.register(
  LineElement,
  CategoryScale,//x-axis
  LinearScale,//y-axis
  PointElement
)



function Graph() {
   const data= {
       labels:['Mon','Tue','Wed','Thur','Fri','Sat','Sun'],
       datasets:[{
       data:[1,2,1.5,1.9,1.9,3.2,2.8,4,],
       borderColor:'rgb(66, 196, 252)',
       label:'dataset1',
       fill:true,
       lineTension:0.5
       },
      { data:[2,1,2.5,1.2,1.5,1,1.5,0.9,],
        borderColor:'rgb(202, 66, 252)',
        label:'dataset2',
        fill:true,
        lineTension:0.5
      }]
   }

   const options={
    plugins:{
      legend:true,
      responsive:true,
      maintainAspectRatio: false,
      grid:false,
    },
    scales:{
      y: {max:4,
         min:0,
        ticks: {
            stepSize: 1
        }
     }
     
    }
   }

  return (
    <div className='Graph-background'>
            <div className='First-Line'>
            <h1>Productivity</h1>
            <input type="date" name="" id="Date" />
            </div>
                    <div className='SecondLine'> 
                        <div className='ReSearch'>
                        <div className='Blue-circle'></div>
                        <p className='weight'>Research</p>
                        </div>

                        <div className='Design'>
                           <div className='Purple-circle'></div>
                            <p className='weight'>Design</p>
                        </div>

                        <div className='Right-Text'>
                            <p>Date updates every 2 hours</p>
                        </div>
                    </div>
                
                <div className='Graph'
                 style={
                  {  position: "relative",
                     marginLeft:"1rem",
                     margin: "auto",
                     width:'80vw',
                     height:'32vh',
                     hoverBackgroundColor: "rgba(255,99,132,0.4)",
                  

                  }
                }>
                  <Line
                   data={data}
                   options={options}
                  >
                  </Line>
                
                 </div>
    </div>

    

                
  )
}

export default Graph
