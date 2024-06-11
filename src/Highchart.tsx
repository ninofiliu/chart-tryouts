import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Row } from "./data";

export const Highchart = ({ data }: { data: Row[] }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: "line",
        },
        title: {
          text: "Line Chart with Category on X-axis and Float on Y-axis",
        },
        xAxis: {
          categories: data.map((row) => row.category),
        },
        yAxis: {
          title: {
            text: "Float",
          },
        },
        series: [
          {
            name: "Float",
            data: data.map((row) => row.float),
          },
        ],
      }}
    />
  );
};
