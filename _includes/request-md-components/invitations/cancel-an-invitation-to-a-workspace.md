## Cancel an invitation to a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}/invitations/{invitation-id}
{:.path .path-DELETE}

Cancels a pending invitation `{invitation-id}` to the workspace `{workspace-id}`.

### Prerequisites

- The user must be the owner of workspace `{workspace-id}`

### Request

#### cURL

{% include snippets/invitations/cancel-an-invitation-to-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/invitations/cancel-an-invitation-to-a-workspace/python-requests.md %}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
