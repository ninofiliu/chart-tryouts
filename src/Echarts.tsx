import { useEffect, useState } from "react";
import { Row } from "./data";
import * as echarts from "echarts";

export const Echarts = ({ data }: { data: Row[] }) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [chart, setChart] = useState<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!container) return;
    const chart = echarts.init(container);
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        chart.resize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(container.parentElement!);
    setChart(chart);
  }, [container, data]);

  useEffect(() => {
    if (!chart) return;
    chart.setOption({
      xAxis: {
        data: data.map((row) => row.category),
      },
      yAxis: {},
      series: [
        {
          type: "line",
          data: data.map((row) => row.float),
        },
      ],
    });
  }, [data, chart]);

  return <div ref={setContainer} />;
};
