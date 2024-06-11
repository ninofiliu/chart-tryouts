import { Resizable } from "./Resizable";
import { ReactCharts } from "./ReactCharts";
import { useState } from "react";

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

  return (
    <>
      <div>
        <input
          type="number"
          value={ns}
          onChange={(evt) => setNs(evt.target.value)}
        />
      </div>
      <Resizable>
        <ReactCharts data={data} />
      </Resizable>
    </>
  );
};
