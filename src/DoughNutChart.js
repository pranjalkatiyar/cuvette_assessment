import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Poll",
        data: [15, 7],
        backgroundColor: ["#438AF6", "#438AF61A"]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart"
    },
    responsive: true,
    animation: {
      animateScale: true
    },
    cutout: "65%"
  };

  return (
    <div style={{ width: "15rem" }}>
      <div style={{ position: "absolute" }}>
        <Doughnut data={data} options={options} />
      </div>
      <div style={{ position: "relative", top: "8rem", left: "1.75rem" }}>
        <div style={{ position: "relative" }}>
          <img src="./Ellipse 125.png" alt="ellipse" width="66px" />
        </div>
        <img
          style={{
            position: "relative",
            top: "-3.8rem"
          }}
          src="./target.png"
          alt="target"
        />
      </div>
    </div>
  );
}

export default DoughnutChart;
