---
layout: default
title: Datasets
permalink: /endpoints/datasets
parent: Endpoints
nav_order: 4
components: request-md-components/datasets
---

# {{page.title}}
{: .no_toc }

---

## Dataset Object
{: .no_toc}

What is a dataset object?

### Schema
{: .no_toc}

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
`likedByProfiles` | `Array` | A collection of [Member objects](workspaces#member-object) that have liked the dataset
`commentCount` | `Integer` | The number of comments the dataset has received
`viewCount` | `Integer` | The number of views the dataset has received

### Example Resource
{: .no_toc}

GET
{:.label .label-GET}

/api/datasets/{dataset-id}
{:.path .path-GET}

`placeholder snippet`

---

#### Requests
{: .no_toc }

- TOC
{: toc }

---

{% include {{page.components}}/view-ds.md %}
{% include {{page.components}}/view-ds-by-channel-id.md %}
{% include {{page.components}}/withdraw-ds.md %}
