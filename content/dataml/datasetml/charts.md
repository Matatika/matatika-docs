---
title: Charts
permalink: /dataml/datasetml/charts
parent: DatasetML
grand_parent: DataML 
nav_order: 1
---

# {{page.title}}

---

You can use different chart types by utilizing the `visulisation` key of the [Matatika dataset YAML file]({{site.baseurl}}/dataml/datasets/dataset-yaml).
{: .fs-5 }

The `visualisation` key contains information about displaying the chart for the insight.
{: .fs-5 }

### Example

```yaml
visualisation: |-
    {"chartjs-chart": {"chartType": "bar"}}
```

---

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

For more information on Chart.js, see their documentation at [https://www.chartjs.org/docs/latest/](https://www.chartjs.org/docs/latest/){:target="_blank"}

---

Further Reading: 

- [API Datasets]({{site.baseurl}}/api/resources/datasets)
- [Example Charts](basic-examples)