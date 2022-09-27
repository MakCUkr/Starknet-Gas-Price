import React from "react";
import { Chart } from 'react-chartjs-2'
import { Line } from "react-chartjs-2";
import "./styles.css";
import { Chart as ChartJS, registerables } from 'chart.js';
import gas_prices from './gas_prices.json';
import starknetLogo from "./StarkNet-Icon.png";

ChartJS.register(
  ...registerables
);

const labels = ['4000', '4002', '4004'];

const data = {
  labels,
  datasets: [
    {
      label: 'Gas Price',
      data:  Object.values(gas_prices),
      borderColor: 'rgba(255,79,10,255)',
      backgroundColor: 'rgba(41,41,110,255)',
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 10
    }
  ],
};

export default function App() {
  return (
    <div>
      <div style={{display: "flex", flexDirection: "row"}}>
        <img src = {starknetLogo} style = {{height: "40px"}}/>
        <h2>StarkNet Gas Price Dashboard</h2>
      </div>
      <div style={{width:"65%"}}>
        <Line data={data} />
      </div>
    </div>
  );
}
