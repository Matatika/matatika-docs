---
layout: default
title: Charts
permalink: /data-visualisation/charts
parent: Data Visualisation
nav_order: 2
---

# `{{page.title}}`

---

The `visulisation` key of the dataset contains information about displaying the chart for the insight.

### Example

```yaml
visualisation: |-
    {"chartjs-chart": {"chartType": "bar"}}
```

---

Dataset Key | Datatype | Information
----------- | -------- | -----------
`visualisation` | `string` of JSON | Details about the precise visualisation of the datasets chart.

### chartType Table

Value | Description
----- | -----------
`bar` | Bar Chart
`line` | Line Chart.
`doughnut` | Doughnut Chart.
`pie` | Pie Chart.
`bubble` | Bubble Chart.
`scatter` | Scatter Chart.
`treemap` | Treemap Chart.

For more information on Chart.js, see their documentation at [https://www.chartjs.org/docs/latest/](https://www.chartjs.org/docs/latest/)
