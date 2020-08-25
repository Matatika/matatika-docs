## Create an invitation to a workspace

POST
{:.label .label-POST}

/api/workspaces/{workspace-id}/invitations
{:.path .path-POST}

Creates a workspace invitation to the workspace `{workspace-id}`.

### Prerequisites

- The user must be a member of the workspace `{workspace-id}`

### Request

#### Body

{% include snippets/invitations/create-an-invitation-to-a-workspace/request-body.md %}

Path | Type | Description | Constraints
---- | ---- | ----------- | -----------
`email` | `String` | The email address of the invitation recipient | Must not be empty; must be a valid email address; email address domain must exist in the workspace's list of allowed domains

#### cURL

{% include snippets/invitations/create-an-invitation-to-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/invitations/create-an-invitation-to-a-workspace/python-requests.md %}

### Response
{: .d-inline-block }

202
{:.label .label-POST}

No response body provided.

---
