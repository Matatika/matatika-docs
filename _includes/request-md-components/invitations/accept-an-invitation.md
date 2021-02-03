## Accept an invitation

PATCH
{:.label .label-PATCH}

/api/workspaces/{workspace-id}/invitations/{invitation-id}
{:.path .path-PATCH}

Accepts the invitation `{invitation-id}` to the workspace `{workspace-id}`.

### Prerequisites

- Workspace `{workspace-id}` must exist
- Invitation `{invitation-id}` must exist for the authenticated user profile

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/invitations/accept-an-invitation/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/invitations/accept-an-invitation/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-PATCH}

[Invitation object](#invitation-object) with HAL links.

---