## Create a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}
{:.path .path-PUT}

Creates the workspace `{workspace-id}`.

### Prerequisites

- The user must be the owner of workspace `{workspace-id}`
- The workspace must have been [initialised](#initialise-a-workspace) in order to create it

### Request
#### Body
[Workspace](#workspace) resource.
{% include snippets/api/workspaces/create-a-workspace/request-body.md %}

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/create-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/workspaces/create-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

201
{:.label .label-PUT}

[Workspace](#workspace) with HAL links.
{% include snippets/api/workspaces/create-a-workspace/response-body.md %}

---
