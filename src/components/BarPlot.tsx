import React from 'react';
import { Bar,HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Set", "Sun"],
  datasets:[
    {
      label: "Demo bar plot",
      backgroundColor: "#7fffd4",
      borderColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      // pointBorderWidth: 10,
      data: [5,6,9,15,30,40,80],

    }
  ]
}

const BarPlot: React.FC= () => {
  return (
    <div>
      <Bar data={data} />
      <HorizontalBar data={data} />
    </div>
  )
}

export default BarPlot
