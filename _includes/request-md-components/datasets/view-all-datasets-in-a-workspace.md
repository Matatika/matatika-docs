## View all datasets in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasets
{:.path .path-GET}

Returns all datasets in the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/datasets/view-all-datasets-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/datasets/view-all-datasets-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataset](#dataset) collection with HAL links.
{% include snippets/api/datasets/view-all-datasets-in-a-workspace/response-body.md %}

---
