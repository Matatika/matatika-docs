## View all workspaces

GET
{:.label .label-GET}

/api/workspaces
{:.path .path-GET}

Returns all workspaces the authenticated user profile is an owner or member of.

### Request
#### Example Snippets
cURL
{: .tab .tabs-section-start}

{% include snippets/api/workspaces/view-all-workspaces/curl-request.md %}

Python (`requests`)
{: .tab}

{% include snippets/api/workspaces/view-all-workspaces/python-requests.md %}
{: .tabs-section-end}

### Response
`200 OK`
{: .dummy-heading .path-GET}

[Workspace](#workspace) collection with HAL links.
{% include snippets/api/workspaces/view-all-workspaces/response-body.md %}

---
