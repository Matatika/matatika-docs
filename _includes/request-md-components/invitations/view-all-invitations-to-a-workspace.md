## View all invitations to a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/invitations
{:.path .path-GET}



*As a workspace owner...*
{: .fs-2 }

Returns all active invitations to the workspace `{workspace-id}`.

*As a workspace member...*
{: .fs-2 }

Returns all active invitations to the workspace `{workspace-id}` sent by the authenticated user profile. 

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/invitations/view-all-invitations-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/invitations/view-all-invitations-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Invitation](#invitation) collection with HAL links.
{% include snippets/api/invitations/view-all-invitations-to-a-workspace/response-body.md %}

---
