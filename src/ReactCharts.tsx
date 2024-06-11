import type { Row } from "./data";
import { AxisOptions, Chart } from "react-charts";

export const ReactCharts = ({ data }: { data: Row[] }) => {
  const primaryAxis: AxisOptions<Row> = {
    getValue: (row) => row.date,
  };
  const secondaryAxes: AxisOptions<Row>[] = [
    {
      getValue: (row) => row.float,
    },
  ];

  return (
    <Chart
      options={{
        primaryAxis,
        secondaryAxes,
        data: [{ label: "my label", data }],
      }}
    />
  );
};
