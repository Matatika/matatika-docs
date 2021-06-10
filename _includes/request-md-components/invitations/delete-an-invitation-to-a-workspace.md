## Delete an invitation

DELETE
{:.label .label-DELETE}

/api/invitations/{invitation-id}
{:.path .path-DELETE}

Deletes a pending or revoked invitation `{invitation-id}`.

### Prerequisites

- The authenticated user must be the owner of workspace the invitation belongs to
- or the authenticated user must have sent the invitation `{invitation-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/invitations/delete-an-invitation-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/invitations/delete-an-invitation-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

204
{:.label .label-DELETE}

No response body provided.

---
