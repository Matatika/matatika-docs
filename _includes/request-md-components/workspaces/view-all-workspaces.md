## View all workspaces

GET
{:.label .label-GET}

/api/workspaces
{:.path .path-GET}

Returns all workspaces the authenticated user profile is an owner or member of.

### Request

#### Body
No request body required.

#### Example Snippets
- cURL
{: .tab .tabs-section-start}

{% include snippets/workspaces/view-all-workspaces/curl-request.md %}

- Python (requests)
{: .tab}

{% include snippets/workspaces/view-all-workspaces/python-requests.md %}
{: .tabs-section-end}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Workspace object](#workspace-object) collection with HAL links.

---
