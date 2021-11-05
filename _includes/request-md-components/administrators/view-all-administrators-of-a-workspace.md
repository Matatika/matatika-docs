## View all administrators of a workspace

GET
{:.label .label-GET}

/api/workspaces/{workspace-id}/administrators
{:.path .path-GET}

Returns all administrators of the workspace `{workspace-id}`.

### Prerequisites
- The user must be a member of the workspace `{workspace-id}`

### Request
#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/view-all-administrators-of-a-workspace/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/api/workspaces/view-all-administrators-of-a-workspace/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Administrator](#administrator) collection with HAL links.

{% include snippets/api/workspaces/view-all-administrators-of-a-workspace/response-body.md %}

---
