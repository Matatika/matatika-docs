---
layout: default
title: query
permalink: /references/dataset-file/query
parent: Dataset File
grand_parent: References
nav_order: 8
---

# `{{page.title}}`

---

The `query` key in the dataset file is the sql query that is run against your chosen data store to retrieve data to use in displaying the insight.

### Example

```yaml
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

---

Dataset Key | Datatype | Information
----------- | -------- | -----------
`query` | `string` of SQL | The query that returns the data from your datastore for use in the dataset’s chart and related table.