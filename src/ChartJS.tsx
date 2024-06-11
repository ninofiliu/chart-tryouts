import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { Row } from "./data";

export const ChartJS = ({ data }: { data: Row[] }) => {
  const [chart, setChart] = useState<Chart | null>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvas) return;
    if (chart) chart.destroy();
    setChart(
      new Chart(canvas, {
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
          events: ["click"],
        },
        plugins: [
          {
            id: "my_event_catcher",
            beforeEvent: console.log,
          },
        ],
      })
    );
  }, [canvas, data]);

  return <canvas ref={setCanvas} />;
};
