import React from 'react'
import "../Graph.css";


const Graph = () => {
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

                  <div className='GRAPH'>

                  </div>
    </div>

    

                
  )
}
const config = {
  type: 'line',
  // data: data,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  },
};

export default Graph
