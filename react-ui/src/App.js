import React from "react";
import { Chart } from 'react-chartjs-2'
import { Line } from "react-chartjs-2";
import "./styles.css";
import { Chart as ChartJS, registerables } from 'chart.js';
import gas_prices from './gas_prices.json';
import timestamps from './timestamps.json';
import starknetLogo from "./StarkNet-Icon.png";

ChartJS.register(
  ...registerables
);

const unixToDate = (unix) => {
  const date = new Date(unix * 1000);
  const datevalues = [
    date.getDate(),
    date.getMonth()+1,
    date.getFullYear()%1000,
    date.getHours()
  ];
  return datevalues[0] + "-" + datevalues[1] + "-" + datevalues[2] + " " + datevalues[3] + ":00";
}


const RATIO = 3; // RATIO is used to decrease the number of data points displayed (for readability of the chart)
const labels = Object.values(timestamps).map((unix) => unixToDate(unix)).filter(
  (value, index, self) => index % RATIO == 0
);
const priceData = Object.values(gas_prices).filter(
  (value, index, self) => index % RATIO == 0
);;

const options = {
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 20
      },
      title: {
        display: true,
        text: "Time"
      }
    },
    y: {
      ticks: {
        callback: function(label, index, labels) {
            return label/1000000000;
        }
      },
      title: {
        display: true,
        text: "Gas Price (Gwei)"
      }
    }
  },
};

const data = {
  labels,
  datasets: [
    {
      label: 'Gas Price',
      data:  priceData,
      borderColor: 'rgba(255,79,10,255)',
      backgroundColor: 'rgba(41,41,110,255)',
      pointStyle: 'circle',
      pointRadius: 2,
      pointHoverRadius: 4,
    }
  ],
};

export default function App() {
  return (
    <div style={{
        backgroundColor: 'rgb(230, 230, 230)'
      }}
    >
      <div>
      <div style={{display: "flex", flexDirection: "row", gap: "200px"}}>
        <img src = {starknetLogo} style = {{height: "40px"}}/>
        <h2 style={{ color: "rgba(255,79,10,255)" }}>StarkNet Gas Price Dashboard</h2>
      </div>
      <div style={{width:"65%"}}>
        <Line data={data} options={options}/>
      </div>
      </div>
    </div>
  );
}
