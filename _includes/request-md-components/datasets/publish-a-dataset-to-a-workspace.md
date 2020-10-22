## Publish a dataset to a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/datasets
{:.path .path-POST}

Publishes a dataset to the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/datasets/publish-a-dataset-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/datasets/publish-a-dataset-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201 / 200
{:.label .label-POST}

[Dataset object](#dataset-object) with HAL links.

---
