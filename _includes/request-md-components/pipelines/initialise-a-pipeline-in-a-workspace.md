## Initialise a pipeline in a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/pipelines
{:.path .path-POST}

Initialises a new pipeline in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/initialise-a-pipeline-in-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/pipelines/initialise-a-pipeline-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-POST}

[Pipeline](#pipeline) with HAL links.
{% include snippets/api/pipelines/initialise-a-pipeline-in-a-workspace/response-body.md %}

---
