## View all datasets in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/datasets
{:.path .path-GET}

Returns all datasets in the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request

#### cURL

{% include snippets/datasets/view-all-datasets-in-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/datasets/view-all-datasets-in-a-workspace/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Dataset object](#dataset-object) collection with HAL links.

---
