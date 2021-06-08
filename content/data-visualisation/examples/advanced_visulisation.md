---
layout: default
title: Advanced Visualisation
permalink: data-visualisation/examples/advanced-visualisation
parent: Examples
grand_parent: Data Visualisation
nav_order: 2
---

# {{page.title}}

---

## Labeled Axis

{% include example_charts/advanced_examples/Example_Labeled_Scatter_Chart.html %}

```yaml
version: datasets/v0.2
title: Example Labeled Scatter Chart
questions: How do the shops compare against visitors and sales?
description: |-
  #Example

  Stats for shops, visitor amount, and sales.
metadata: |-
  {
    "name": "customer", 
    "related_table": {
      "columns": [
        {"name": "sales", "label": "Sales", "description": "Number of Sales"}
      ], 
      "aggregates": [
        {"name": "visitors", "label": "Visitors", "description": "Number of Visitors"}
      ]
    }
  }
rawData: |-
  [
    {"customer.name": "Shop One", "customer.visitors": 1150, "customer.sales": 1040},
    {"customer.name": "Shop Two", "customer.visitors": 980, "customer.sales": 670},
    {"customer.name": "Shop Three", "customer.visitors": 1020, "customer.sales": 990},
    {"customer.name": "Shop Four", "customer.visitors": 1410, "customer.sales": 1020},
    {"customer.name": "Shop Five", "customer.visitors": 890, "customer.sales": 800}
  ]
visualisation: |-
  {"chartjs-chart": 
    {"chartType": "scatter", 
      "options": {
        "scales": {
          "yAxes": [{
            "scaleLabel": {
              "display": true,
              "labelString": "Number of Visitors"
            }
          }],
          "xAxes": [{
            "scaleLabel": {
              "display": true,
              "labelString": "Number of Sales"
            }
          }]
        }    
      }
    }
  }
```
---

## Max Axis Scale

{% include example_charts/advanced_examples/Example_Max_Scale_Line_Chart.html %}

```yaml
version: datasets/v0.2
title: Example Max Scale Line Chart
questions: Are shops meeting their sales target percentage.
description: |-
  #Example

  Stats for shops, their sales target percentage and their actual sales percentage.
metadata: |-
  {
    "name": "customer", 
    "related_table": {
      "columns": [
        {"name": "name", "label": "Shop Name", "description": "Shop Name"}
      ], 
      "aggregates": [
        {"name": "sales_target_percent", "label": "Sales Target Percentage", "description": "Sales Target Percentage"},
        {"name": "sales_percent", "label": "Sales Percentage", "description": "Sales Percentage"}
      ]
    }
  }
rawData: |-
  [
    {"customer.name": "Shop One", "customer.sales_target_percent": 80, "customer.sales_percent": 67},
    {"customer.name": "Shop Two", "customer.sales_target_percent": 80, "customer.sales_percent": 81},
    {"customer.name": "Shop Three", "customer.sales_target_percent": 80, "customer.sales_percent": 85},
    {"customer.name": "Shop Four", "customer.sales_target_percent": 80, "customer.sales_percent": 64},
    {"customer.name": "Shop Five", "customer.sales_target_percent": 80, "customer.sales_percent": 74}
  ]
visualisation: |-
  {"chartjs-chart": 
    {"chartType": "line", 
      "options": {
        "scales": {
          "yAxes": [{
            "ticks": {
              "max": 100
            }
          }]
        }
      }
    }
  }
```
---

## Scale Start At 0

{% include example_charts/advanced_examples/Example_Start_At_0_Line_Chart.html %}

```yaml
version: datasets/v0.2
title: Example Start At 0 Line Chart
questions: Which shop had the most sales?
description: |-
  #Example

  Stats for shops, visitor amount, and sales.
metadata: |-
  {
    "name": "customer", 
    "related_table": {
      "columns": [
        {"name": "name", "label": "Shop Name", "description": "Shop Name"}
      ], 
      "aggregates": [
        {"name": "visitors", "label": "Visitors", "description": "Number of Visitors"},
        {"name": "sales", "label": "Sales", "description": "Number of Sales"}
      ]
    }
  }
rawData: |-
  [
    {"customer.name": "Shop One", "customer.visitors": 1150, "customer.sales": 1040},
    {"customer.name": "Shop Two", "customer.visitors": 980, "customer.sales": 670},
    {"customer.name": "Shop Three", "customer.visitors": 1020, "customer.sales": 990},
    {"customer.name": "Shop Four", "customer.visitors": 1410, "customer.sales": 1020},
    {"customer.name": "Shop Five", "customer.visitors": 890, "customer.sales": 800}
  ]
visualisation: |-
  {"chartjs-chart": 
    {"chartType": "line", 
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
---

## Tick Scaling

{% include example_charts/advanced_examples/Example_Tick_Scaling_Bar_Chart.html %}

```yaml
version: datasets/v0.2
title: Example Tick Scaling Bar Chart
questions: How many deliveries does each shop have?
description: |-
  #Example

  This dataset show the shop and how many daily deliveries they recieve.
metadata: |-
  {
    "name": "shop", 
    "related_table": {
      "columns": [
        {"name": "name", "label": "Shop Name", "description": "Shop Name"}
      ], 
      "aggregates": [
        {"name": "daily_deliveries", "label": "Daily Deliveries", "description": "Daily Deliveries"}
      ]
    }
  }
rawData: |-
  [
    {"shop.name": "Shop One", "shop.daily_deliveries": 1},
    {"shop.name": "Shop Two", "shop.daily_deliveries": 2},
    {"shop.name": "Shop Three", "shop.daily_deliveries": 1}
  ]
visualisation: |-
  {"chartjs-chart": 
    {"chartType": "bar",
      "options": {
        "scales": {
          "yAxes": [{
            "ticks": {
              "beginAtZero": true,
              "stepSize": 1
            }
          }]
        }
      }
    }
  }
```
---




