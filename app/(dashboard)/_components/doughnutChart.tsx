"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useMemo } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Malária", "Paludismo", "Cólera"],
  datasets: [
    {
      data: [120, 80, 45],
      backgroundColor: ["#C7CEFF", "#8593ED", "#5A6ACF"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context: any) => {
          const total = context.dataset.data.reduce(
            (a: number, b: number) => a + b,
            0
          );
          const value = context.raw;
          const percentage = ((value / total) * 100).toFixed(1);
          return `${context.label}: ${percentage}%`;
        },
      },
    },
  },
};

export default function DoughnutChart() {
  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

  const customLegend = useMemo(() => {
    return data.labels.map((label, i) => {
      const value = data.datasets[0].data[i];
      const percentage = ((value / total) * 100).toFixed(1);
      return {
        label,
        color: data.datasets[0].backgroundColor[i],
        percentage,
      };
    });
  }, [total]);

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative w-[220px] h-[220px]">
        <Doughnut data={data} options={options} />
      </div>

      <div className="flex gap-6 mt-4">
        {customLegend.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-sm text-gray-700">
              {item.label} ({item.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
