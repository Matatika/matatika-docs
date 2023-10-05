## Validate a pipeline configuration in a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/pipelines/validation
{:.path .path-POST}

Validates a pipeline configuration in the workspace `{workspace-id}`.

### Prerequisites
- Workspace `{workspace-id}` must exist

### Request
#### Body

[Pipeline](#pipeline) resource.
{% include snippets/api/pipelines/validate-a-pipeline-configuration-in-a-workspace/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/pipelines/validate-a-pipeline-configuration-in-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/pipelines/validate-a-pipeline-configuration-in-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-POST}

No response body provided.

`400 Bad Request`
{: .dummy-heading .path-POST}

[Pipeline property](pipelines#properties) validation errors.
{% include snippets/api/pipelines/validate-a-pipeline-configuration-in-a-workspace/response-body.md %}

---
