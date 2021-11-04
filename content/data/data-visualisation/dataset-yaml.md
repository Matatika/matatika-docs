---
layout: default
title: Dataset YAML
permalink: /data/data-visualisation/dataset-yaml
nav_order: 1
parent: Data Visualisation
grand_parent: Data
---

# {{page.title}}

---

The Matatika dataset file is a way to create and format insights for your workspace.
{: .fs-5 }

Our dataset files are stored as YAML files, you can read more about the YAML format and its syntax [here](https://yaml.org/){:target="_blank"}.
{: .fs-5 }

---

### Dataset Layout

```yaml
version: datasets/v0.2
source: <channel_name>
title: <dataset_title>
questions: <dataset_questions>
description: <dataset_description>
metadata: <dataset_metadata>
visualisation: <dataset_visulisation>
query: <dataset_query
rawData: <dataset_data>
```

### Dataset Example

```yaml
version: datasets/v0.2
source: Google Analytics
title: "Google Analytics Daily Users Last 14 Days"
questions: ‘How many users has there been over the last 14 days?’
description: |-
    Daily users over the last 14 days.

    #google-analytics
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
visualisation: |-
    {"chartjs-chart": {"chartType": "bar"}}
query: |-
    SELECT 
    report_date "google_analytics_locations.report_date"
    , sum(users) "google_analytics_locations.total_users"
    FROM google_analytics_locations
    WHERE report_date >= current_date - interval '14' day
    AND report_date < current_date
    GROUP BY report_date 
    ORDER BY report_date
```

### Dataset Key Information

Dataset Key | Datatype |  Information
----------- | -------- | -----------
`version` | `String` | The version determines how the CLI handles publishing the dataset. 
`source` | `String`  | A channel name to be used to group up related datasets in your workspace.
`title` | `String` | The title at the top of the insight.
`questions` | `String` | Questions that your dataset answers, so people can find the dataset just by asking questions.
`description` | `String` | Information about what the dataset is, how it's being filtered or displayed and other relevant information. You can also add `#tags`.
`metadata` | `String` of JSON | Details about how the dataset's chart is laid out. [More Info]({{site.baseurl}}/data-visualisation/metadata)
`visulisation` | `String` of JSON | Details about the precise visualisation of the datasets chart. [More Info]({{site.baseurl}}/data-visualisation/charts)
`query` | `String` of SQL | The query that returns the data from your datastore for use in the dataset's chart and related table. [More Info]({{site.baseurl}}/data-visualisation/query)
`rawData` | `String` of a List | The rawData key allows you to hard-code data directly into your dataset.

## String Formatting

You may use any of the following string formats:
```yaml
title: Google Analytics Daily Users Last 14 Days

title: 'Google Analytics Daily Users Last 14 Days'

title: "Google Analytics Daily Users Last 14 Days"

title: |-
    Google Analytics Daily Users Last 14 Days
    Multi-line string, remember to indent
```

The multiline string is generally the best way to display the `String` of JSON or SQL.

---

Further Reading: 

- [API Datasets]({{site.baseurl}}/api/resources/datasets)
- [Example Charts]({{site.baseurl}}/data-visualisation/examples)