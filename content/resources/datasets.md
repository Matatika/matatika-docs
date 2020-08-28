---
layout: default
title: Datasets
permalink: /resources/datasets
parent: Resources
nav_order: 5
components: request-md-components/datasets
---

# {{page.title}}

Datasets are modules of data that can be published to workspaces. The visualisation of datasets is supported, following the Google Charts specification.
{: .fs-5 }

---

## Dataset Object
{: .no_toc}

### Schema

Path | Type | Description
---- | ---- | -----------
`id` | `String` | The dataset ID
`published` | `String` | Timestamp denoting when the dataset was published
`alias` | `String` | The dataset alias
`workspaceId` | `String` | The workspace ID of the published dataset
`channelId` | `String` | The channel ID of the published dataset
`source` | `String` | The channel ID where the dataset was initially published to
`information` | `String` | The dataset information
`description` | `String` | The dataset description
`questions` | `String` | The dataset questions
`rawData` | `String` | The dataset raw data
`visualisation` | `String` | The dataset visualization metadata, defined by [Google Charts](https://developers.google.com/chart/interactive/docs/quick_start)
`query` | `String` | The dataset query
`likeCount` | `Integer` | The number of likes the dataset has received
`likedByProfiles` | `Array` of [`Member objects`](members#member-object) | The members that have liked the dataset
`commentCount` | `Integer` | The number of comments the dataset has received
`viewCount` | `Integer` | The number of views the dataset has received

### Example Resource

GET
{:.label .label-GET}

/api/datasets/{dataset-id}
{:.path .path-GET}

{% include snippets/datasets/view-a-dataset/response-body.md %}

---

#### Requests

- TOC
{: toc }

---

{% include {{ page.components }}/view-a-dataset.md %}
{% include {{ page.components }}/view-datasets-by-channel-id.md %}
{% include {{ page.components }}/view-all-datasets-in-a-workspace.md %}
{% include {{ page.components }}/publish-a-dataset-to-a-workspace.md %}
{% include {{ page.components }}/record-a-view-of-a-dataset.md %}
{% include {{ page.components }}/record-a-like-of-a-dataset.md %}
{% include {{ page.components }}/remove-a-like-from-a-dataset.md %}
{% include {{ page.components }}/withdraw-a-dataset.md %}
