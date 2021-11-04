---
layout: default
title: Datasets
permalink: /api/resources/datasets
parent: Resources
grand_parent: API
nav_order: 5
components: request-md-components/datasets
---

# {{page.title}}

Datasets are modules of data that can be published to workspaces. Datasets are visualised in the Matatika app following the [Chart.js](https://www.chartjs.org/){:target="_blank"} specifications.
{: .fs-5 }

---

## Objects
{: .no_toc}

### Dataset

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The dataset ID
`published` | `String` | ISO 8601 timestamp | The instant the dataset was published
`alias` | `String` | | The dataset alias
`workspaceId` | `String` | Version 4 UUID | The workspace ID of the published dataset
`source` | `String` | | The channel ID where the dataset was initially published to
`title` | `String` | | The dataset title
`description` | `String` | | The dataset description (may contain markdown)
`questions` | `String` | | The dataset questions
`rawData` | `String` | JSON | The dataset raw data
`visualisation` | `String` | JSON | The dataset visualisation metadata. [More Info]({{site.baseurl}}/data/data-visualisation/charts)
`metadata` | `String` | JSON | The dataset metadata. [More Info]({{site.baseurl}}/data/data-visualisation/metadata)
`query` | `String` | SQL statement | The dataset query. [More Info]({{site.baseurl}}/data/data-visualisation/query)
`likeCount` | `Integer` | | The number of likes the dataset has received
`likedByProfiles` | `Array` of [`Member`](members#member) | | The members that have liked the dataset
`commentCount` | `Integer` | | The number of comments the dataset has received
`viewCount` | `Integer` | | The number of views the dataset has received
`created` | `String` | ISO 8601 timestamp | The instant the dataset was create
`score` | `Float` | | The dataset score used to determine its position in the workspace [Feed](feed)

{% include snippets/api/datasets/view-a-dataset/response-body.md %}

### Dataset Message

Path | Type | Format | Description
---- | ---- | ------ | -----------
`id` | `String` | Version 4 UUID | The dataset message ID (shared with the resulting [notification](notifications))
`recipientId` | `String` | | The recipient profile ID
`message` | `String` | | The dataset message content
`datasetId` | `String` | Version 4 UUID | The message subject dataset ID

{% include snippets/api/datasets/create-or-update-a-dataset-message/response-body.md %}

---

#### Requests

- TOC
{: toc }

#### See Also

- [View all comments on a dataset](comments#view-all-comments-on-a-dataset)
- [Search for datasets in a workspace by free text](search#search-for-datasets-in-a-workspace-by-free-text)
- [Search for datasets in a workspace by channel name](search#search-for-datasets-in-a-workspace-by-channel-name)
- [Search for datasets in a workspace by tag name](search#search-for-datasets-in-a-workspace-by-tag-name)
- [Subscribe to a dataset](subscriptions#subscribe-to-a-dataset)

---

{% include {{ page.components }}/view-all-datasets-in-a-workspace.md %}
{% include {{ page.components }}/view-datasets-in-a-workspace-liked-by-profile.md %}
{% include {{ page.components }}/view-datasets-by-channel.md %}
{% include {{ page.components }}/view-a-dataset.md %}
{% include {{ page.components }}/view-a-dataset-in-a-workspace.md %}
{% include {{ page.components }}/view-the-data-of-a-dataset.md %}
{% include {{ page.components }}/publish-a-dataset-to-a-workspace.md %}
{% include {{ page.components }}/edit-a-dataset.md %}
{% include {{ page.components }}/record-a-view-of-a-dataset.md %}
{% include {{ page.components }}/record-a-like-of-a-dataset.md %}
{% include {{ page.components }}/remove-a-like-from-a-dataset.md %}
{% include {{ page.components }}/initialise-a-new-dataset-message.md %}
{% include {{ page.components }}/create-or-update-a-dataset-message.md %}
{% include {{ page.components }}/delete-a-dataset.md %}

---

Further Reading:

- [Matatika dataset YAML file]({{site.baseurl}}/data/data-visualisation/dataset-yaml)
- [Example Charts]({{site.baseurl}}/data/data-visualisation/basic-examples)