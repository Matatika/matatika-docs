## Withdraw an administrator from a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}/administrators/{profile-id}
{:.path .path-DELETE}

Withdraws the profile `{profile-id}` as an administrator from the workspace `{workspace-id}`.

### Prerequisites
- The authenticated user profile must be the owner of the workspace `{workspace-id}`
- The profile `{profile-id}` must be an administrator of the workspace `{workspace-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/withdraw-an-administrator-from-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/workspaces/withdraw-an-administrator-from-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-DELETE}

[Administrator](#administrator) with HAL links.
{% include snippets/api/workspaces/withdraw-an-administrator-from-a-workspace/response-body.md %}

---
