"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Casos",
        data: [150, 300, 742, 400, 500, 350, 270],
        backgroundColor: (ctx: any) =>
          ctx.raw === 742 ? "#fb6b5b" : "#94a3b8", // destaca a barra
        borderRadius: 8,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: function (context: any) {
          const tooltipModel = context.tooltip;
          let tooltipEl = document.getElementById("chartjs-tooltip");

          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.className =
              "absolute text-center bg-white border border-gray-300 shadow-lg text-sm font-medium text-gray-700";
            document.body.appendChild(tooltipEl);
          }

          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          if (tooltipModel.body) {
            const value = tooltipModel.dataPoints[0].raw;
            tooltipEl.innerHTML = `<b>${value}</b> additional text`;
          }

          const { offsetLeft, offsetTop } = context.chart.canvas;
          tooltipEl.style.opacity = "1";
          tooltipEl.style.position = "absolute";
          tooltipEl.style.left = offsetLeft + tooltipModel.caretX - 40 + "px";
          tooltipEl.style.top = offsetTop + tooltipModel.caretY - 50 + "px";
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 250 },
        grid: { color: "#e5e7eb" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="relative w-[280px] h-[300px] mr-5">
      <Bar data={data} options={options} />
    </div>
  );
}
