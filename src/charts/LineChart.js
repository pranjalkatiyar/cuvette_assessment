import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },

    tooltip: {
      callbacks: {
        label: (item) => {
          return `${item.parsed.y} percentile`;
        }
      }
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

const labels = [0, 20, 40, 60, 80, 100];

export const data = {
  labels,
  datasets: [
    {
      labels: "Sales of the week",
      data: [6, 3, 9, 4, 6, 5.5, 5.6],
      backgroundColor: "aqua",
      borderColor: "#C8D6E5",
      pointBorderColor: "aqua",
      fill: true,
      tension: 0.4
    }
  ]
};

const LineChart = () => {
  return <Line options={options} data={data} />;
};

export default LineChart;
