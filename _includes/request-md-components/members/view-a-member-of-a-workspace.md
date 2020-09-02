## View a member of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/members/{member-id}
{:.path .path-GET}

Returns the member `{member-id}` of the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request

#### cURL

{% include snippets/workspaces/view-a-member-of-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/workspaces/view-a-member-of-a-workspace/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Member object](#member-object) with HAL links.

---