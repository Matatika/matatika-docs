## View all invitations to a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/invitations
{:.path .path-GET}

Returns active invitations to the workspace `{workspace-id}` specific to the user. As a workspace owner, this instead returns all active invitations to the workspace across all members.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request

#### cURL

{% include snippets/invitations/view-all-invitations-to-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/invitations/view-all-invitations-to-a-workspace/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Invitation object](invitations#invitation-object) collection with HAL links.

---
