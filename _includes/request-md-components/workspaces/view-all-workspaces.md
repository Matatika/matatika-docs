## View all workspaces

GET
{:.label .label-GET}

/api/workspaces
{:.path .path-GET}

Returns all workspaces.

### Request

#### cURL

{% include snippets/workspaces/view-all-workspaces/curl-request.md %}

#### Python (Requests)

{% include snippets/workspaces/view-all-workspaces/python-requests.md %}

### Response
{: .d-inline-block }

200
{:.label .label-GET}

[Workspace object](#workspace-object) collection with HAL links.

---
