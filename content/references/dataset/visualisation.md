---
layout: default
title: visualisation
permalink: /references/dataset-file/visualisation
parent: Dataset File
grand_parent: References
nav_order: 7
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

## Advanced Visulisation Examples

### Setting Axis Labels

```yaml
visualisation: |-
    {
        "chartjs-chart": {
            "chartType": "bar", 
                "options": {
                    "scales": {
                        "yAxes": [{
                            "scaleLabel": {
                                "display": true,
                                "labelString": "Number of Users"
                            }
                        }]
                    }
                }
        }
    }
```

### Setting Axis Scales

```yaml
visualisation: |-
    {
        "chartjs-chart": {
            "chartType": "bar",
                "options": {
                    "scales": {
                        "yAxes": [{
                            "ticks": {
                                "beginAtZero": true
                            }  
                        }]
                    }
                }
        }
    }
```

### Custom Bar Charts

#### Stacked Bar Chart

```yaml
visualisation: |-
    {
        "chartjs-chart": {
            "chartType": "bar", 
                "options": {
                    "scales": {
                        "xAxes": [{
                            "stacked": true
                        }],
                        "yAxes": [{
                            "stacked": true
                        }]
                    }
                }
        }
    }
```

