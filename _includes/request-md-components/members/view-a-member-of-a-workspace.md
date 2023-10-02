## View a member of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members/{member-id}
{:.path .path-GET}

Returns the member `{member-id}` of the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/view-a-member-of-a-workspace/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/workspaces/view-a-member-of-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Member](#member) with HAL links.
{% include snippets/api/workspaces/view-a-member-of-a-workspace/response-body.md %}

---
