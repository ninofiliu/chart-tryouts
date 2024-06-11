# Chart tryouts

POC repo for trying out four chart libraries

- Echarts
- Highcharts
- ChartJS
- React Charts

Verdict:

Both Echarts and Highcharts have everything that we're looking for in a chart engine:

- Support for almost every useful chart we can think of
- Good documentation and intuitive configuration
- Declarative pattern (via config objects, so not like d3, which is imperative)
- Typescript support

Echarts is free and open source while Highcharts is paid ($332/user/year in our case), but has a few more small perks:

- Slightly better performances (eg: throttle on resize)
- [HighchartsGPT](https://www.highcharts.com/chat/gpt/) (Note that AIs like Claude know about Echarts too...)
- Native React support

Overall Echarts and Highcharts are not only very similar in usage, they're similar in capabilities, so between an expensive option and a free one I'd chose the free one.

ChartJS and React Charts are way behind, having a worse doc, less intuitive DX, supporting no charts beside the basics, worse animations, etc. Whatever the chart, I don't see any reasons to chose either ChartJS or React Charts over ECharts:

- Chart.js
  - Can dynamically update the config, but on serie data change, redraws the whole serie
  - Errors are hard to understand. API can feel awkward. I just couldn't make a linechart with time x axis. The code from the official demo didn't work.
  - Another awkwardness is event handlers only passing up coordinates that you have to convert back into data points to find the clicked row.
- React Charts
  - Docs are very sparse, mostly consisting in a huge codesandbox with all the examples that you have to reverse engineer to understand how things work.
  - I couldn't really distinguish bugs from misconfigurations.
  - Options are not JSDoc'ed so that makes things even more difficult.

Tables are available in the [comparisons folder](./comparisons/). The "performance" is the number of rows at which the chart resize starts to jitter visibly (<10fps).
