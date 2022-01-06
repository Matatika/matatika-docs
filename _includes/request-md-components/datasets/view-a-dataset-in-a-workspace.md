## View a dataset in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasets/{dataset-id-or-alias}
{:.path .path-GET}

Returns the dataset `{dataset-id-or-alias}` in the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`
- Dataset `{dataset-id-or-alias}` must exist within the workspace `{workspace-id}`


### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/view-a-dataset-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/view-a-dataset-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Dataset](#dataset) with HAL links.
{% include snippets/api/datasets/view-a-dataset-in-a-workspace/response-body.md %}

---
