import React from 'react';
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Set", "Sun"],
  datasets:[
    {
      label: "Demo line plot",
      backgroundColor: "#000000",
      borderColor: "#7fffd4",
      pointBorderWidth: 10,
      data: [5,6,9,15,30,40,80],

    }
  ]
}
const LinePlot: React.FC= () => {
  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default LinePlot
