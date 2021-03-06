## View a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}
{:.path .path-GET}

Returns the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/view-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/workspaces/view-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Workspace](#workspace) with HAL links.

---
