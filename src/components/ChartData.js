import React from 'react'
import{ Line } from 'react-chartjs-2'

const ChartData = () => {
  return (
    <div>
        <Line
        data={{
            labels:[ 'red','blue','green','yellow','violet'
            ],
        }}
         height={100}
         width={100}

         options={{
            maintainAspectRatio:false,
         }}
        
        />
    </div>
  )
}

export default ChartData