The "performance" is the number of rows at which the chart resize starts to jitter visibly (<10fps)

# Chart.js

Can dynamically update the config, but on serie data change, redraws the whole serie

Errors are hard to understand. API can feel awkward. I just couldn't make a linechart with time x axis. The code from the official demo didn't work.

Another awkwardness is event handlers only passing up coordinates that you have to convert back into data points to find the clicked row.

# React Charts

Docs is very sparse, mostly consisting in a huge codesandbox with all the examples that you have to reverse engineer to understand how things work.

I couldn't really distinguish bugs from misconfigurations.

Options are not JSDoc'ed so that makes things even more difficult.

# Highcharts

Sadly the only paid option, highcharts however goes above and beyond in all categories.

It has every perk of echarts and adds some more.

Special shoutout to the highchart-gpt that allowed me to setup a working chart in react that was responsive to the parent element in literally 1mn.
