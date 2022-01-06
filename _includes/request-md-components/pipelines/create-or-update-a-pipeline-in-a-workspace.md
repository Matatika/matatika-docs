## Create or update a pipeline in a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/pipelines/{pipeline-id}
{:.path .path-PUT}

Creates or updates the pipeline `{pipeline-id}` in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
[Pipeline](#pipeline) resource.
{% include snippets/api/pipelines/create-a-pipeline-in-a-workspace/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/create-a-pipeline-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/pipelines/create-a-pipeline-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201 / 200
{:.label .label-PUT}

[Pipeline](#pipeline) with HAL links.
{% include snippets/api/pipelines/create-a-pipeline-in-a-workspace/response-body.md %}

---
