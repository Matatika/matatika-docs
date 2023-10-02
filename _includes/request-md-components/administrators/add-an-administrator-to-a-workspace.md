## Add an administrator to a workspace

PUT
{:.label .label-PUT}

/api/workspaces/{workspace-id}/administrators/{profile-id}
{:.path .path-PUT}

Adds the profile `{profile-id}` as an administrator to the workspace `{workspace-id}`.

### Prerequisites
- The authenticated user profile must be the owner of the workspace `{workspace-id}`
- The profile `{profile-id}` must be a [member](members) of the workspace `{workspace-id}`

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/add-an-administrator-to-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/workspaces/add-an-administrator-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

[Administrator](#administrator) with HAL links.
{% include snippets/api/workspaces/add-an-administrator-to-a-workspace/response-body.md %}

---
