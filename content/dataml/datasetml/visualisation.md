---
title: Visualisation
permalink: /dataml/datasetml/visualisation
parent: DatasetML
grand_parent: DataML 
nav_order: 1
---

# {{page.title}}

---

You can use different chart types by utilizing the `visualisation` key of the [Matatika dataset YAML file]({{site.baseurl}}/dataml/datasetml/).
{: .fs-5 }

The `visualisation` key contains information about displaying the chart for the insight.
{: .fs-5 }

### Example

```yaml
visualisation: |-
    {"chartjs-chart": {"chartType": "bar"}}
```

---

### HTML table

Basic table layout for datasets can be acheived with the `html-table` visualisation type.

```yaml
visualisation: |-
    {"html-table": {}}
```

### ChartJS charts

Beautiful ChartJS data visualisations can be acheived with the `chartjs-chart` visualisation type.

```yaml
visualisation: |-
    {"chartjs-chart": {"chartType": "bar"}}
```

Value | Description
----- | -----------
`bar` | Bar Chart
`line` | Line Chart.
`doughnut` | Doughnut Chart.
`pie` | Pie Chart.
`bubble` | Bubble Chart.
`scatter` | Scatter Chart.
`treemap` | Treemap Chart.

For more information on Chart.js, see their documentation at [https://www.chartjs.org/docs/latest/](https://www.chartjs.org/docs/latest/){:target="_blank"}

---

Further Reading: 

- [API Datasets]({{site.baseurl}}/api/resources/datasets)
- [Example Charts](basic-examples)