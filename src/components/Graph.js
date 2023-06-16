import React from 'react'
import "../Graph.css";
import{Line} from 'react-chartjs-2'
import{
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointELement
} from 'chart.js';

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointELement
)
function Graph() {
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
                
                <div>
                  <Line
                  data = {data}
                  options = {options}
                  ></Line>
                 
                 </div>
    </div>

    

                
  )
}

export default Graph
