## Withdraw an invitation

PUT
{:.label .label-PUT}

/api/invitations/{invitation-id}/revoked
{:.path .path-PUT}

Withdraws the pending or accepted invitation `{invitation-id}`.

### Prerequisites

- The authenticated user must be the owner of workspace the invitation belongs to
- or the authenticated user must have sent the invitation `{invitation-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/invitations/withdraw-an-invitation-to-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/invitations/withdraw-an-invitation-to-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PUT}

No response body provided.

---
