import Chart from "chart.js/auto";
import { useState } from "react";
import type { data as dataType } from "./data";

export const ChartJS = ({ data }: { data: typeof dataType }) => {
  const [chart, setChart] = useState<Chart | null>(null);
  return (
    <canvas
      ref={(elt) => {
        if (!elt) return;
        if (chart) return;
        setChart(
          new Chart(elt, {
            type: "line",
            data: {
              labels: data.map((row) => row.category),
              datasets: [
                {
                  label: "Acquisitions by year",
                  data: data.map((row) => row.float),
                  borderColor: "red",
                  backgroundColor: "pink",
                },
              ],
            },
            options: {
              maintainAspectRatio: false,
            },
          })
        );
      }}
    />
  );
};
