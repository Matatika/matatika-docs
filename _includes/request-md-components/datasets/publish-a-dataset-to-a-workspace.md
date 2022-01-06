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


[Dataset](#dataset) resource.
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
{% include snippets/api/datasets/publish-a-dataset-to-a-workspace/response-body.md %}

---
