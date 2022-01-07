## Delete a workspace

DELETE
{:.label .label-DELETE}

/api/workspaces/{workspace-id}
{:.path .path-DELETE}

Deletes the workspace `{workspace-id}`.

### Prerequisites

- The user must be the owner of workspace `{workspace-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/delete-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/workspaces/delete-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
`204 No Content`
{: .dummy-heading .path-DELETE}

No response body provided.

---
