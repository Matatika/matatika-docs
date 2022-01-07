## Accept an invitation

PATCH
{:.label .label-PATCH}

/api/invitations/{invitation-id}
{:.path .path-PATCH}

Accepts the invitation `{invitation-id}`.

### Prerequisites

- Workspace `{workspace-id}` must exist
- Invitation `{invitation-id}` must exist for the authenticated user profile

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/invitations/accept-an-invitation/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/invitations/accept-an-invitation/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-PATCH}

[Invitation](#invitation) with HAL links.
{% include snippets/api/invitations/accept-an-invitation/response-body.md %}

---
