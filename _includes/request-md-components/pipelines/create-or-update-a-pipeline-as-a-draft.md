## Create or update a pipeline as a draft

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/pipelines/{pipeline-id}/draft
{:.path .path-PUT}

Creates or updates the pipeline `{pipeline-id}` in the workspace `{workspace-id}` as a draft.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Body
[Pipeline](#pipeline) resource.
{% include snippets/api/pipelines/create-a-pipeline-as-a-draft/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/create-a-pipeline-as-a-draft/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/pipelines/create-a-pipeline-as-a-draft/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK / 201 Created`
{: .dummy-heading .path-PUT}

[Pipeline](#pipeline) with HAL links.
{% include snippets/api/pipelines/create-a-pipeline-as-a-draft/response-body.md %}

---
