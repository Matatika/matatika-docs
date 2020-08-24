## Cancel an invitation to a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}/invitations/{invitation-id}
{:.path .path-DELETE}

Cancels a pending invitation `{invitation-id}` to the workspace `{workspace-id}`.

### Prerequisites
{: .no_toc }

- The user must be the owner of workspace `{workspace-id}`

### Request
{: .no_toc }

#### cURL
{: .no_toc }

{% include snippets/workspaces/cancel-an-invitation-to-a-workspace/curl-request.md %}

#### Python (Requests)

{% include snippets/workspaces/cancel-an-invitation-to-a-workspace/python-requests.md %}

### Response
{: .no_toc .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
