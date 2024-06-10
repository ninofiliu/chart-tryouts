import Chart from "chart.js/auto";
import { useState } from "react";

const data = Array(20)
  .fill(null)
  .map((_, index) => ({
    index,
    float: Math.random(),
    category: `cat-${index}`,
    date: new Date(2000 + index, 1, 1),
  }));

export const App = () => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [chart, setChart] = useState<Chart | null>(null);

  return (
    <div
      className="container"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
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
      <button
        className="resizer"
        onMouseDown={(evtDown) => {
          const onMove = (evtMove: MouseEvent) => {
            setWidth(width + evtMove.clientX - evtDown.clientX);
            setHeight(height + evtMove.clientY - evtDown.clientY);
          };
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", onMove);
          });
        }}
      ></button>
    </div>
  );
};
