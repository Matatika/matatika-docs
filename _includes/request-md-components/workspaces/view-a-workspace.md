## View a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

Returns the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request

#### cURL

{% include snippets/workspaces/view-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/workspaces/view-a-workspace/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Workspace object](#workspace-object) with HAL links.

---
