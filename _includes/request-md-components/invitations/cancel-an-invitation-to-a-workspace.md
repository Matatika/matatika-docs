## Cancel an invitation to a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}/invitations/{invitation-id}
{:.path .path-DELETE}

Cancels a pending invitation `{invitation-id}` to the workspace `{workspace-id}`.

### Prerequisites

- The user must be the owner of workspace `{workspace-id}`

### Request

- cURL
{: .tab .tabs-section-start}

{% include snippets/invitations/cancel-an-invitation-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/invitations/cancel-an-invitation-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
