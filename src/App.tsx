import { Resizable } from "./Resizable";
import { ReactCharts } from "./ReactCharts";
import { useState } from "react";
import { ChartJS } from "./ChartJS";
import { Echarts } from "./Echarts";
import { Highchart } from "./Highchart";

const generateData = (n: number) =>
  Array(n)
    .fill(null)
    .map((_, index) => ({
      index,
      float: Math.random(),
      category: `cat-${index}`,
      date: new Date(2000 + index, 1, 1),
    }));

export const App = () => {
  const [ns, setNs] = useState("10");
  const n = +ns || 1;
  const data = generateData(n);

  const chartComponents = { ReactCharts, ChartJS, Echarts, Highchart } as const;
  const [lib, setLib] = useState<keyof typeof chartComponents>("ChartJS");
  const ChartComponent = chartComponents[lib];

  return (
    <>
      <div>
        <input
          type="number"
          value={ns}
          onChange={(evt) => setNs(evt.target.value)}
        />
        <select
          value={lib}
          onChange={(evt) =>
            setLib(evt.target.value as keyof typeof chartComponents)
          }
        >
          {Object.keys(chartComponents).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <Resizable>
        <ChartComponent data={data} />
      </Resizable>
    </>
  );
};
