## View all pipelines in a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/pipelines
{:.path .path-GET}

Returns all configured pipelines in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/view-all-pipelines-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/pipelines/view-all-pipelines-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Pipeline](#pipeline) collection with HAL links.
{% include snippets/api/pipelines/view-all-pipelines-in-a-workspace/response-body.md %}

---
