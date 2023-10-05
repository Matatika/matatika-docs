## Update a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}
{:.path .path-PUT}

Updates the workspace `{workspace-id}`.

### Prerequisites

- The user must be the owner of workspace `{workspace-id}`
- The workspace must have been [created](#create-a-workspace) in order to update it

### Request
#### Body
[Workspace](#workspace) resource.
{% include snippets/api/workspaces/update-a-workspace/request-body.md %}

#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/update-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/workspaces/update-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

[Workspace](#workspace) with HAL links.
{% include snippets/api/workspaces/update-a-workspace/response-body.md %}

---
