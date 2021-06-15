## Publish a dataset to a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/datasets
{:.path .path-POST}

Publishes a dataset to the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request
Making the request with an existing `id` or `alias` will result in the respective dataset being overwritten.

#### Body

Path | Type | Format | Description | Required
---- | ---- | ------ | ----------- | --------
`id` | `String` | Version 4 UUID | The dataset ID | Only if `alias` is not specified
`alias` | `String` | | The dataset alias | Only if `id` is not specified
`description` | `String` | | The dataset description (may contain markdown) | No
`questions` | `String` | | The dataset questions | No
`rawData` | `String` | JSON | The dataset raw data | No
`visualisation` | `String` | JSON | The dataset visualisation metadata | No
`metadata` | `String` | JSON | The dataset metadata | No
`query` | `String` | SQL statement | The dataset query | No

{% include snippets/api/datasets/publish-a-dataset-to-a-workspace/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/publish-a-dataset-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/publish-a-dataset-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201 / 200
{:.label .label-POST}

[Dataset](#dataset) with HAL links.

---
