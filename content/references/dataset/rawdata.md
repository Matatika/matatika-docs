---
layout: default
title: rawData
permalink: /references/dataset-file/rawdata
parent: Dataset File
grand_parent: References
nav_order: 9
---

# `{{page.title}}`

---

The `rawData` key in the dataset allows you to pass "hardcoded" data into your dataset for visulisation. Generally you use either `rawData` or `query` as each of these keys return data for the insight to use.

### Example

```yaml
rawData: |-
  [
    {"google_analytics_locations.report_date": "2020-02-01", "google_analytics_locations.total_users": 12},
    {"google_analytics_locations.report_date": "2020-02-02", "google_analytics_locations.total_users": 19},
    {"google_analytics_locations.report_date": "2020-02-03", "google_analytics_locations.total_users": 3}
  ]
```

---

Dataset Key | Datatype | Information
----------- | -------- | -----------
`rawData` | `string` | The rawData key allows you to hardcode data directly into your dataset.