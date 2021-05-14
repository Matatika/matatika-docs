---
layout: default
title: description
permalink: /references/dataset-file/description
parent: Dataset File
grand_parent: References
nav_order: 5
---

# `{{page.title}}`

---

The `description` contains a brief overview or explanation of the dataset, and will be displayed below the insight's chart. 

It's useful to include how the data being displayed is being filtered or formatted, so users know at a glance whats included in your dataset and it's insight.

You can also make use of [#tags]({{site.baseurl}}/resources/tags) in your description. 

### Example

```yaml
description: |-
    Daily users over the last 14 days.
    #google-analytics
```

---

Dataset Key | Datatype | Information
----------- | -------- | -----------
`description` | `string` | Information about what the dataset is, how it’s being filtered or displayed and other relevent information.
