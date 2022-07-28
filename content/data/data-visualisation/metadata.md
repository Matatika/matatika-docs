---
title: Metadata
permalink: /data/data-visualisation/metadata
parent: Data Visualisation
grand_parent: Data
nav_order: 4
---

# {{page.title}}

---

You can change the format and display of your chart by using the `metadata` key of the [Matatika dataset YAML file]({{site.baseurl}}/data/data-visualisation/dataset-yaml).
{: .fs-5 }

The `metadata` key relates to how the data from the [`query`](query) within the dataset is displayed as an insight.
{: .fs-5 }

### Example

```yaml
metadata: |-
    {
        "name": "google_analytics_locations",
        "label": "Daily Users",
        "related_table": {
        "columns": [
            {"name": "report_date", "label": "Date", "description": "Date"}
        ], 
        "aggregates": [
            {"name": "total_users", "label": "Total Users", "description": "Total Users"}
        ]
        }
    }
```

---

Metadata Key | Details
------------ | -------
`name` | Name of the sql table you are querying, or it alias if assigned.
`label` | Chart label.
`related_table` | Columns and aggregates to display in the chart.
`columns` | x-axis catagories, usually dates or groups.
`aggregates` | Bars, Points, Lines that show the information over the `columns` catagories.
`links` | Can be defined to connect datasets or external links, either by clicking on specific aggregates, or defining a link globally.


## Examples of Links

### Global Link Example (Dataset)

With a global link, if you click on any of the data in the visualisation you have to option of viewing what is linked. You can use a global link to drill-down to another dataset, or link to an external source.

```yaml
metadata: |-
    {
        "name": "google_analytics_locations",
        "label": "Daily Users",
        "related_table": {
        "columns": [
            {"name": "report_date", "label": "Date", "description": "Date"}
        ], 
        "aggregates": [
            {"name": "total_users", "label": "Total Users", "description": "Total Users"}
        ]
        },
        "links": [{"dataset": "another_datasets_file_name_without_file_extension"}]
    }
```

### Aggregate Link Example (External Link)

With an aggregate link, if you click on the specific aggregate data in the visualisation you have to option of viewing what is linked. You can use a aggregate link to drill-down to another dataset, or link to an external source.

```yaml
metadata: |-
    {
        "name": "google_analytics_locations",
        "label": "Daily Users",
        "related_table": {
        "columns": [
            {"name": "report_date", "label": "Date", "description": "Date"}
        ], 
        "aggregates": [
            {"name": "total_users", "label": "Total Users", "description": "Total Users", "links": [
                    {"href": "https://developers.google.com/analytics", "target": "_blank"}]
            }
        ]
        }
    }
```
---

Further Reading: 

- [API Datasets]({{site.baseurl}}/api/resources/datasets)
- [Example Charts](basic-examples)