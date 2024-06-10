import Chart from "chart.js/auto";
import { useState } from "react";
import { Resizable } from "./Resizable";

const data = Array(20)
  .fill(null)
  .map((_, index) => ({
    index,
    float: Math.random(),
    category: `cat-${index}`,
    date: new Date(2000 + index, 1, 1),
  }));

export const App = () => {
  const [chart, setChart] = useState<Chart | null>(null);

  return (
    <Resizable>
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
    </Resizable>
  );
};
