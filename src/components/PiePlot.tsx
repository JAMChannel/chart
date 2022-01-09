import React from 'react';
import { Pie, Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Windows", "Mac", "Linux"],
  datasets:[
    {
      // label: "Demo line plot",
      backgroundColor: ["#4169e1", "#ff1493","#fff"],
      hoverBackgroundColor: ["#36A2EB", "#FF6384","#FFCE56"],
      borderColor: ["transparent","transparent","transparent"],
      // pointBorderWidth: 10,
      data: [90,7,3],

    }
  ]
}

const PiePlot = () => {
  return (
    <div>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  )
}

export default PiePlot
