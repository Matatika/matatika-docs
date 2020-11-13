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

{% include snippets/api/workspaces/update-a-workspace/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`name` | `String` | The workspace name | Must not be null
`domains` | `String` | The allowed domains for workspace access control | N/A

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/update-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/workspaces/update-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PUT}

[Workspace object](#workspace-object) with HAL links.

---
